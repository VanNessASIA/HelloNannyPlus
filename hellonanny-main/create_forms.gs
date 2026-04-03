/**
 * Google Apps Script - Hello Nanny Forms Creator
 *
 * 使い方:
 * 1. https://script.google.com にアクセス
 * 2. 新しいプロジェクトを作成
 * 3. このコードを貼り付け
 * 4. createAllForms() を実行
 * 5. ログに出力されるEmbed URLをコピー
 */

function createAllForms() {
  const requestFormUrl = createRequestForm();
  const recruitFormUrl = createRecruitForm();

  Logger.log("=== DONE ===");
  Logger.log("Request Form Embed URL: " + requestFormUrl);
  Logger.log("Recruit Form Embed URL: " + recruitFormUrl);
}

function createRequestForm() {
  const form = FormApp.create("Hello Nanny - Service Request");
  form.setDescription(
    "Thank you for your interest in Hello Nanny! Please fill out this form and we will get back to you within 24 hours."
  );
  form.setConfirmationMessage(
    "Thank you for your request! We will contact you within 24 hours."
  );

  // Section 1: Personal Information
  form.addSectionHeaderItem()
    .setTitle("Personal Information");

  form.addTextItem()
    .setTitle("First Name")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Family Name")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Email")
    .setRequired(true)
    .setValidation(FormApp.createTextValidation()
      .requireTextIsEmail()
      .build());

  form.addTextItem()
    .setTitle("Mobile Number")
    .setHelpText("e.g., +66 XXX XXX XXXX")
    .setRequired(true);

  form.addTextItem()
    .setTitle("WhatsApp Number")
    .setHelpText("If different from mobile number");

  form.addTextItem()
    .setTitle("Nationality")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Age");

  form.addParagraphTextItem()
    .setTitle("Address in Bangkok")
    .setHelpText("Area or full address")
    .setRequired(true);

  // Section 2: Service Details
  form.addSectionHeaderItem()
    .setTitle("Service Details");

  form.addMultipleChoiceItem()
    .setTitle("Type of Help Needed")
    .setChoiceValues(["Nanny / Babysitter", "Maid / Housekeeper", "Both (Nanny + Maid)"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Live-in or Live-out?")
    .setChoiceValues(["Live-in", "Live-out (commute)", "Either is fine"])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle("Language Requirements")
    .setChoiceValues(["English", "Thai", "Japanese", "Chinese (Mandarin)", "Other"])
    .setHelpText("Select all that apply");

  form.addTextItem()
    .setTitle("Salary Budget (THB/month)")
    .setHelpText("e.g., 15,000 - 20,000");

  form.addDateItem()
    .setTitle("Preferred Start Date");

  // Section 3: Children & Requirements
  form.addSectionHeaderItem()
    .setTitle("Children & Requirements");

  form.addTextItem()
    .setTitle("Number of Children");

  form.addTextItem()
    .setTitle("Children's Age(s)")
    .setHelpText("e.g., 2 years old, 5 years old");

  form.addParagraphTextItem()
    .setTitle("Special Requirements or Requests")
    .setHelpText("Anything else you'd like us to know (allergies, schedule preferences, pet-friendly, cooking skills, etc.)");

  form.addMultipleChoiceItem()
    .setTitle("How did you hear about us?")
    .setChoiceValues([
      "Google Search",
      "Facebook / Instagram",
      "Friend / Referral",
      "Blog / Article",
      "LINE",
      "Other"
    ]);

  // Get embed URL
  const formId = form.getId();
  const embedUrl = "https://docs.google.com/forms/d/e/" + FormApp.openById(formId).getPublishedUrl().split("/d/e/")[1];

  Logger.log("Request Form created: " + form.getEditUrl());
  Logger.log("Request Form published: " + form.getPublishedUrl());

  return form.getPublishedUrl();
}

function createRecruitForm() {
  const form = FormApp.create("Hello Nanny - Job Application");
  form.setDescription(
    "Thank you for your interest in joining Hello Nanny! Please fill out this form and attach your resume."
  );
  form.setConfirmationMessage(
    "Thank you for applying! We will review your application and get back to you soon."
  );
  form.setAllowResponseEdits(false);

  form.addTextItem()
    .setTitle("Full Name")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Phone Number")
    .setHelpText("e.g., +66 XXX XXX XXXX")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Email")
    .setRequired(true)
    .setValidation(FormApp.createTextValidation()
      .requireTextIsEmail()
      .build());

  form.addMultipleChoiceItem()
    .setTitle("Position You're Applying For")
    .setChoiceValues([
      "Nanny / Babysitter",
      "Maid / Housekeeper",
      "Customer Support",
      "Consulting / Coordinator",
      "Other"
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Experience & Background")
    .setHelpText("Please tell us about your experience, skills, and any relevant background.")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Message (Optional)")
    .setHelpText("Anything else you'd like us to know?");

  form.addParagraphTextItem()
    .setTitle("Resume / CV Link (Optional)")
    .setHelpText("Paste a link to your resume (Google Drive, Dropbox, etc.)");

  // Get embed URL
  const formId = form.getId();

  Logger.log("Recruit Form created: " + form.getEditUrl());
  Logger.log("Recruit Form published: " + form.getPublishedUrl());

  return form.getPublishedUrl();
}
