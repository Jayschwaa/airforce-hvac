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

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return Response.json({ error: "Email is not configured" }, { status: 500 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Service Type", serviceType || "—"],
    ["Category", serviceCategory || "—"],
    ["Message", message],
  ];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Air Force HVAC Website <website@airforceteam.com>",
      to: [...CONTACT_FORM_RECIPIENTS],
      reply_to: `${name.replace(/[<>"]/g, "")} <${email}>`,
      subject: `New website inquiry from ${name} (${serviceType || "General"})`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<h2>New Contact Form Submission</h2><table cellpadding="6">${rows
        .map(
          ([k, v]) =>
            `<tr><td valign="top"><strong>${k}</strong></td><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}</table>`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Contact form: Resend rejected the email", res.status, detail);
    // Resend's error names (e.g. validation_error) carry no secrets and help diagnose setup issues.
    let reason: string | undefined;
    try {
      reason = (JSON.parse(detail) as { name?: string; message?: string }).message;
    } catch {}
    return Response.json({ error: "Failed to send", status: res.status, reason }, { status: 502 });
  }

  return Response.json({ ok: true });
}
