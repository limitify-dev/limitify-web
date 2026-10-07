import "server-only";

import nodemailer from "nodemailer";

type EmailOptions = {
  subject: string;
  text: string;
  replyTo?: string;
};

function gmailConfig() {
  const user = process.env.GMAIL_SMTP_USER;
  const password = process.env.GMAIL_SMTP_APP_PASSWORD;

  if (!user || !password) {
    throw new Error(
      "Gmail SMTP is not configured. Set GMAIL_SMTP_USER and GMAIL_SMTP_APP_PASSWORD.",
    );
  }

  return { user, password };
}

export async function sendEmail({ subject, text, replyTo }: EmailOptions) {
  const { user, password } = gmailConfig();
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass: password },
  });

  await transporter.sendMail({
    from: `"${process.env.SMTP_FROM_NAME || "Limitify Website"}" <${user}>`,
    to: process.env.CONTACT_TO_EMAIL || user,
    replyTo,
    subject,
    text,
  });
}
