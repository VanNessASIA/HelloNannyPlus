/**
 * Google Apps Script Web App - フォーム受信バックエンド
 * GETリクエストの ?payload= パラメータでJSONデータを受信
 *
 * 回答はこのSpreadsheetに保存:
 * https://docs.google.com/spreadsheets/d/1V0bzLAPRg9Xf_eF8ZVVLw8NiYuTroQ-332zKEfX76As/
 */

var SPREADSHEET_ID = "1V0bzLAPRg9Xf_eF8ZVVLw8NiYuTroQ-332zKEfX76As";

function doGet(e) {
  try {
    // payloadパラメータがあればフォーム送信として処理
    if (e.parameter && e.parameter.payload) {
      var data = JSON.parse(e.parameter.payload);
      var formType = data.formType;

      if (formType === "request") {
        saveToRequestSheet(data);
      } else if (formType === "recruit") {
        saveToRecruitSheet(data);
      }

      sendNotification(data);

      return ContentService.createTextOutput(
        JSON.stringify({ status: "success" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ status: "ok", message: "Hello Nanny Form Backend" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    var data;
    if (e.parameter && e.parameter.payload) {
      data = JSON.parse(e.parameter.payload);
    } else if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      throw new Error("No data received");
    }

    var formType = data.formType;

    if (formType === "request") {
      saveToRequestSheet(data);
    } else if (formType === "recruit") {
      saveToRecruitSheet(data);
    }

    sendNotification(data);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function saveToRequestSheet(data) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);

  var sheet = ss.getSheetByName("Requests");
  if (!sheet) {
    sheet = ss.insertSheet("Requests");
    sheet.appendRow([
      "Timestamp", "First Name", "Family Name", "Email", "Mobile",
      "WhatsApp", "Nationality", "Age", "Address", "Type of Help",
      "Live-in/out", "Languages", "Salary Budget", "Start Date",
      "Number of Children", "Children Ages", "Requirements", "How Found Us"
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.firstName || "",
    data.familyName || "",
    data.email || "",
    data.mobile || "",
    data.whatsapp || "",
    data.nationality || "",
    data.age || "",
    data.address || "",
    data.helpType || "",
    data.liveInOut || "",
    (data.languages || []).join(", "),
    data.salaryBudget || "",
    data.startDate || "",
    data.numChildren || "",
    data.childrenAges || "",
    data.requirements || "",
    data.howFound || ""
  ]);
}

function saveToRecruitSheet(data) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);

  var sheet = ss.getSheetByName("Applications");
  if (!sheet) {
    sheet = ss.insertSheet("Applications");
    sheet.appendRow([
      "Timestamp", "Full Name", "Phone", "Email",
      "Position", "Experience", "Message", "Resume Link"
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.fullName || "",
    data.phone || "",
    data.email || "",
    data.position || "",
    data.experience || "",
    data.message || "",
    data.resumeLink || ""
  ]);
}

function sendNotification(data) {
  var to = "info@hellonanny-san.com";
  var formType = data.formType === "request" ? "Service Request" : "Job Application";
  var subject = "[Hello Nanny] New " + formType;

  var body = "New " + formType + " received!\n\n";
  for (var key in data) {
    if (key !== "formType") {
      var val = data[key];
      body += key + ": " + (Array.isArray(val) ? val.join(", ") : val) + "\n";
    }
  }
  body += "\nTimestamp: " + new Date().toISOString();

  MailApp.sendEmail(to, subject, body);
}
