import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";
import type { Request, Response } from "firebase-functions/v1";
import * as https from "https";
import * as http from "http";
import { URL } from "url";

admin.initializeApp();

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------
// Set via Firebase Functions config:
//   firebase functions:config:set line.token="YOUR_CHANNEL_ACCESS_TOKEN" line.group_id="YOUR_GROUP_ID" gas.url="YOUR_GAS_EXEC_URL"
//
// Or via .env file (functions/.env):
//   LINE_CHANNEL_ACCESS_TOKEN=your_line_channel_access_token
//   LINE_GROUP_ID=your_line_group_id
//   GAS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

const GAS_URL =
  process.env.GAS_URL ||
  functions.config().gas?.url ||
  "https://script.google.com/macros/s/AKfycbw3AaBAKmQukyL4OzMgJRDWLizuMYjoYH4TOn3jEM88F3K7zcl_X5oPXAtAsR6XBvhfmA/exec";

const LINE_CHANNEL_ACCESS_TOKEN =
  process.env.LINE_CHANNEL_ACCESS_TOKEN ||
  functions.config().line?.token ||
  "";

const LINE_GROUP_ID =
  process.env.LINE_GROUP_ID ||
  functions.config().line?.group_id ||
  "";

// ---------------------------------------------------------------------------
// Helper: fetch with redirect following (Node built-in, no external deps)
// ---------------------------------------------------------------------------
function fetchUrl(
  urlStr: string,
  options: { method: string; headers: Record<string, string>; body?: string },
  redirectCount = 0
): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) {
      reject(new Error("Too many redirects"));
      return;
    }

    const parsed = new URL(urlStr);
    const lib: typeof https | typeof http = parsed.protocol === "https:" ? https : http;

    const req = lib.request(
      {
        hostname: parsed.hostname,
        port: parsed.port,
        path: parsed.pathname + parsed.search,
        method: options.method,
        headers: options.headers,
      },
      (res) => {
        // Follow redirects (301, 302, 303, 307, 308)
        if (
          res.statusCode &&
          [301, 302, 303, 307, 308].includes(res.statusCode) &&
          res.headers.location
        ) {
          resolve(
            fetchUrl(res.headers.location, options, redirectCount + 1)
          );
          res.resume();
          return;
        }

        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ status: res.statusCode ?? 0, body: data }));
      }
    );

    req.on("error", reject);

    if (options.body) {
      req.write(options.body);
    }
    req.end();
  });
}

// ---------------------------------------------------------------------------
// Helper: Send LINE push message to group
// ---------------------------------------------------------------------------
interface FormData {
  formType?: string;
  firstName?: string;
  familyName?: string;
  fullName?: string;
  email?: string;
  mobile?: string;
  phone?: string;
  helpType?: string;
  position?: string;
  liveInOut?: string;
  languages?: string[];
  salaryBudget?: string;
  startDate?: string;
  numChildren?: string;
  address?: string;
  [key: string]: unknown;
}

function buildLineMessage(data: FormData): string {
  const isRequest = data.formType === "request";
  const formLabel = isRequest ? "New Service Request" : "New Job Application";

  const lines: string[] = [
    `📋 ${formLabel}`,
    "─────────────────",
  ];

  if (isRequest) {
    const name = [data.firstName, data.familyName].filter(Boolean).join(" ") || "-";
    lines.push(`👤 Name: ${name}`);
    lines.push(`📧 Email: ${data.email || "-"}`);
    lines.push(`📱 Mobile: ${data.mobile || "-"}`);
    if (data.whatsapp) lines.push(`💬 WhatsApp: ${data.whatsapp}`);
    lines.push(`🌍 Nationality: ${data.nationality || "-"}`);
    if (data.age) lines.push(`🎂 Age: ${data.age}`);
    lines.push(`📍 Address: ${data.address || "-"}`);
    lines.push("─────────────────");
    lines.push(`🏠 Service Type: ${data.helpType || "-"}`);
    lines.push(`🏡 Live-in/out: ${data.liveInOut || "-"}`);
    if (data.languages && data.languages.length > 0) {
      lines.push(`🌐 Language: ${data.languages.join(", ")}`);
    }
    lines.push(`💰 Budget: ${data.salaryBudget || "-"} THB`);
    lines.push(`📅 Start Date: ${data.startDate || "-"}`);
    lines.push("─────────────────");
    lines.push(`👶 No. of Children: ${data.numChildren || "-"}`);
    if (data.childrenAges) lines.push(`🎈 Children's Ages: ${data.childrenAges}`);
    if (data.requirements) lines.push(`📝 Requirements: ${data.requirements}`);
    lines.push(`🔍 How Found: ${data.howFound || "-"}`);
  } else {
    const name = data.fullName || "-";
    lines.push(`👤 Name: ${name}`);
    lines.push(`📧 Email: ${data.email || "-"}`);
    lines.push(`📱 Phone: ${data.phone || "-"}`);
    lines.push(`💼 Position: ${data.position || "-"}`);
    if (data.experience) lines.push(`📋 Experience: ${data.experience}`);
    if (data.message) lines.push(`💬 Message: ${data.message}`);
  }

  lines.push("─────────────────");
  lines.push(
    `⏰ ${new Date().toLocaleString("en-GB", { timeZone: "Asia/Bangkok", dateStyle: "short", timeStyle: "short" })} BKK`
  );

  return lines.join("\n");
}

async function sendLineNotification(data: FormData): Promise<void> {
  if (!LINE_CHANNEL_ACCESS_TOKEN || !LINE_GROUP_ID) {
    console.warn(
      "LINE config not set. Skipping LINE notification. " +
      "Set LINE_CHANNEL_ACCESS_TOKEN and LINE_GROUP_ID."
    );
    return;
  }

  const message = buildLineMessage(data);
  const payload = JSON.stringify({
    to: LINE_GROUP_ID,
    messages: [{ type: "text", text: message }],
  });

  const result = await fetchUrl(
    "https://api.line.me/v2/bot/message/push",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
        "Content-Length": Buffer.byteLength(payload).toString(),
      },
      body: payload,
    }
  );

  if (result.status !== 200) {
    console.error(`LINE API error: status=${result.status}, body=${result.body}`);
  } else {
    console.log("LINE notification sent successfully.");
  }
}

// ---------------------------------------------------------------------------
// Cloud Function: submitForm
// Handles POST /api/submit-form (mapped via firebase.json rewrite)
// ---------------------------------------------------------------------------
export const submitForm = functions
  .region("asia-northeast1") // Tokyo region for lower latency
  .https.onRequest(async (req: Request, res: Response) => {
    // CORS headers
    const allowedOrigins = [
      "https://hellonannyplus.web.app",
      "https://hellonannyplus.firebaseapp.com",
      "https://hellonanny-main.vercel.app",
    ];
    const origin = req.headers.origin ?? "";
    if (allowedOrigins.includes(origin) || origin.startsWith("http://localhost")) {
      res.set("Access-Control-Allow-Origin", origin);
    } else {
      // Allow all origins as fallback (tighten in production if needed)
      res.set("Access-Control-Allow-Origin", "*");
    }
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({ status: "error", message: "Method Not Allowed" });
      return;
    }

    try {
      const body: FormData = req.body as FormData;

      // 1. Forward to Google Apps Script (Spreadsheet + email notification)
      const urlEncoded = new URLSearchParams({
        payload: JSON.stringify(body),
      }).toString();

      const gasResult = await fetchUrl(GAS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": Buffer.byteLength(urlEncoded).toString(),
        },
        body: urlEncoded,
      });

      console.log(`GAS response: status=${gasResult.status}, body=${gasResult.body}`);

      // 2. Send LINE notification (fire-and-forget style with error catch)
      await sendLineNotification(body).catch((err: unknown) => {
        console.error("LINE notification failed (non-fatal):", err);
      });

      res.status(200).json({ status: "success", gas: gasResult.body });
    } catch (error) {
      console.error("submitForm error:", error);
      res.status(500).json({ status: "error", message: String(error) });
    }
  });

// ---------------------------------------------------------------------------
// Webhook: LINE event receiver (for capturing group ID, etc.)
// ---------------------------------------------------------------------------
export const lineWebhook = functions
  .region("asia-northeast1")
  .https.onRequest(async (req: Request, res: Response) => {
    if (req.method !== "POST") {
      res.status(200).send("OK");
      return;
    }

    const events = req.body?.events || [];
    for (const event of events) {
      console.log("=== LINE EVENT ===");
      console.log(JSON.stringify(event, null, 2));

      if (event.source?.groupId) {
        console.log(`★ GROUP ID: ${event.source.groupId}`);
      }
      if (event.source?.userId) {
        console.log(`★ USER ID: ${event.source.userId}`);
      }
    }

    res.status(200).json({ status: "ok" });
  });
