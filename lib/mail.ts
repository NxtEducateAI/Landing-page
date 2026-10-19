import nodemailer from "nodemailer";
import { DemoFormData } from "./validations";

// Default fallback email if not specified in environment variables
export const DEFAULT_NOTIFICATION_EMAIL = "admin@intelligent-schools.com";

export function getEmailTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendDemoRequestEmail(
  data: DemoFormData,
  confirmationId: string
): Promise<{ success: boolean; simulated?: boolean; error?: string }> {
  const recipient =
    process.env.RECIPIENT_EMAIL ||
    process.env.NOTIFICATION_EMAIL ||
    DEFAULT_NOTIFICATION_EMAIL;

  const transporter = getEmailTransporter();

  const formattedDate = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const subject = `🚀 New School Demo Request: ${data.schoolName} (${data.fullName} - ${data.role})`;

  const textContent = `
NEW DEMO REQUEST RECEIVED - NXTEducate AI
--------------------------------------------------
Confirmation ID: ${confirmationId}
Submission Date: ${formattedDate}

Applicant Details:
- Full Name: ${data.fullName}
- Institutional Role: ${data.role}
- Email: ${data.email}
- Contact Phone: ${data.phone}

Institution Details:
- School / Institution: ${data.schoolName}
- City: ${data.city}
- Student Population: ${data.studentCount} students

Action Required:
Please contact the applicant within 24 hours to schedule their interactive live demonstration.
--------------------------------------------------
`.trim();

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #f3f4f6; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background-color: #111827; border-radius: 12px; border: 1px solid #1f2937; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    .header { background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 28px 24px; text-align: center; }
    .header h1 { margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }
    .header p { margin: 6px 0 0 0; color: #e0e7ff; font-size: 14px; }
    .badge { display: inline-block; background-color: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; color: #ffffff; margin-top: 10px; }
    .body-content { padding: 24px; }
    .section-title { font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #9ca3af; margin-bottom: 12px; font-weight: 600; border-bottom: 1px solid #1f2937; padding-bottom: 6px; }
    .info-grid { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    .info-grid td { padding: 10px 12px; vertical-align: top; }
    .info-grid tr:nth-child(even) { background-color: rgba(255, 255, 255, 0.02); }
    .label { color: #9ca3af; font-size: 13px; font-weight: 500; width: 35%; }
    .value { color: #f9fafb; font-size: 14px; font-weight: 600; }
    .highlight { color: #818cf8; }
    .footer { padding: 18px 24px; background-color: #0d131f; border-top: 1px solid #1f2937; text-align: center; font-size: 12px; color: #6b7280; }
    .action-btn { display: inline-block; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 13px; margin-top: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New School Demo Request</h1>
      <p>A school leadership member has requested an interactive walkthrough</p>
      <div class="badge">ID: ${confirmationId}</div>
    </div>
    <div class="body-content">
      <div class="section-title">Institutional Leadership Contact</div>
      <table class="info-grid">
        <tr>
          <td class="label">Full Name</td>
          <td class="value">${data.fullName}</td>
        </tr>
        <tr>
          <td class="label">Official Role</td>
          <td class="value"><span class="highlight">${data.role}</span></td>
        </tr>
        <tr>
          <td class="label">Official Email</td>
          <td class="value"><a href="mailto:${data.email}" style="color: #818cf8; text-decoration: none;">${data.email}</a></td>
        </tr>
        <tr>
          <td class="label">Direct Phone</td>
          <td class="value"><a href="tel:${data.phone}" style="color: #818cf8; text-decoration: none;">${data.phone}</a></td>
        </tr>
      </table>

      <div class="section-title">School Campus Information</div>
      <table class="info-grid">
        <tr>
          <td class="label">School / Institution</td>
          <td class="value">${data.schoolName}</td>
        </tr>
        <tr>
          <td class="label">Campus Location</td>
          <td class="value">${data.city}</td>
        </tr>
        <tr>
          <td class="label">Student Body Size</td>
          <td class="value">${data.studentCount} students</td>
        </tr>
        <tr>
          <td class="label">Submitted At</td>
          <td class="value">${formattedDate}</td>
        </tr>
      </table>

      <div style="text-align: center; margin-top: 20px;">
        <a href="mailto:${data.email}?subject=Confirming%20Your%20NxtEducate%20Demo%20Request%20(${confirmationId})" class="action-btn">
          Reply Directly to ${data.fullName} &rarr;
        </a>
      </div>
    </div>
    <div class="footer">
      This notification was generated automatically by the NxtEducate AI platform.
    </div>
  </div>
</body>
</html>
`.trim();

  if (!transporter) {
    // If SMTP credentials are not yet set in environment, log to console for development
    console.warn(
      `[Nodemailer] SMTP credentials (SMTP_USER / SMTP_PASS) not set in environment. Demo request email simulated for: ${recipient}`
    );
    console.log(`[Demo Submission Details]:`, {
      to: recipient,
      subject,
      data,
      confirmationId,
    });
    return { success: true, simulated: true };
  }

  try {
    const fromAddress = process.env.SMTP_FROM || `"NxtEducate AI" <${process.env.SMTP_USER}>`;

    await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: data.email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    return { success: true, simulated: false };
  } catch (error: any) {
    console.error("[Nodemailer] Failed to send demo request email:", error);
    return {
      success: false,
      error: error.message || "Failed to dispatch email",
    };
  }
}
