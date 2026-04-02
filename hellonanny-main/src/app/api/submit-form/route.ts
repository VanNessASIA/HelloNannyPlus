import { NextResponse } from "next/server";

const GAS_URL =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbw3AaBAKmQukyL4OzMgJRDWLizuMYjoYH4TOn3jEM88F3K7zcl_X5oPXAtAsR6XBvhfmA/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ payload: JSON.stringify(body) }),
      redirect: "follow",
    });

    const text = await res.text();
    return NextResponse.json({ status: "success", gas: text });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: String(error) },
      { status: 500 }
    );
  }
}
