import nodemailer from "nodemailer";
import { CONTACT_FORM_RECIPIENTS } from "@/lib/constants";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  serviceType?: unknown;
  serviceCategory?: unknown;
  message?: unknown;
};

function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = clean(body.name, 200);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 50);
  const serviceType = clean(body.serviceType, 100);
  const serviceCategory = clean(body.serviceCategory, 50);
  const message = clean(body.message, 5000);

  if (!name || !phone || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP_USER / SMTP_PASS are not set");
    return Response.json({ error: "Email is not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: (process.env.SMTP_PORT ?? "465") === "465",
    // Google shows app passwords in groups of four; tolerate pasted spaces.
    auth: { user: SMTP_USER.trim(), pass: SMTP_PASS.replace(/\s+/g, "") },
  });

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Service Type", serviceType || "—"],
    ["Category", serviceCategory || "—"],
    ["Message", message],
  ];

  try {
    await transporter.sendMail({
      from: `"Air Force HVAC Website" <${SMTP_USER.trim()}>`,
      to: [...CONTACT_FORM_RECIPIENTS],
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New website inquiry from ${name} (${serviceType || "General"})`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<h2>New Contact Form Submission</h2><table cellpadding="6">${rows
        .map(
          ([k, v]) =>
            `<tr><td valign="top"><strong>${k}</strong></td><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}</table>`,
    });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    // Expose only the SMTP error code (e.g. EAUTH) so delivery problems can be diagnosed.
    const code = (err as { code?: string; responseCode?: number }) ?? {};
    return Response.json(
      { error: "Failed to send", code: code.code, responseCode: code.responseCode },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
