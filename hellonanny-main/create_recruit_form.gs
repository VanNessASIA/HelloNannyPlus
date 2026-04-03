/**
 * Recruit Form のみ作成
 *
 * 1. https://script.google.com で新しいプロジェクト作成
 * 2. このコードを貼り付け
 * 3. createRecruitForm() を実行
 * 4. ログのURLをコピー
 */

function createRecruitForm() {
  var form = FormApp.create("Hello Nanny - Job Application");
  form.setDescription(
    "Thank you for your interest in joining Hello Nanny! Please fill out this form and we will get back to you soon."
  );
  form.setConfirmationMessage(
    "Thank you for applying! We will review your application and get back to you soon."
  );

  form.addTextItem()
    .setTitle("Full Name")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Phone Number")
    .setHelpText("e.g., +66 XXX XXX XXXX")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Email")
    .setRequired(true);

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

  var publishedUrl = form.getPublishedUrl();
  var editUrl = form.getEditUrl();

  Logger.log("Edit URL: " + editUrl);
  Logger.log("Published URL: " + publishedUrl);
  Logger.log("");
  Logger.log("=== ↓ この URL を共有してください ===");
  Logger.log(publishedUrl);
}
