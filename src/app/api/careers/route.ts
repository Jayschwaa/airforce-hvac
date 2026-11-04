import { CAREERS_RECIPIENTS } from "@/lib/constants";

// Vercel caps request bodies at ~4.5 MB, so keep resumes under 4 MB.
const MAX_RESUME_BYTES = 4 * 1024 * 1024;
const ALLOWED_EXTENSIONS = ["pdf", "doc", "docx", "rtf", "txt", "jpg", "jpeg", "png"];

function field(form: FormData, key: string, max = 2000): string {
  const value = form.get(key);
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
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real applicants never see or fill this field.
  if (field(form, "company_website")) {
    return Response.json({ ok: true });
  }

  const name = field(form, "name", 200);
  const email = field(form, "email", 200);
  const phone = field(form, "phone", 50);
  const city = field(form, "city", 100);
  const position = field(form, "position", 20);
  const experience = field(form, "experience", 50);
  const certifications = field(form, "certifications", 500);
  const driversLicense = field(form, "driversLicense", 10);
  const ownTools = field(form, "ownTools", 10);
  const workAuthorized = field(form, "workAuthorized", 10);
  const startDate = field(form, "startDate", 100);
  const message = field(form, "message", 5000);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (
    !name ||
    !phone ||
    !emailValid ||
    (position !== "commercial" && position !== "residential")
  ) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const resume = form.get("resume");
  let attachment: { filename: string; content: string } | undefined;
  if (resume instanceof File && resume.size > 0) {
    const ext = resume.name.split(".").pop()?.toLowerCase() ?? "";
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return Response.json({ error: "Unsupported resume file type" }, { status: 400 });
    }
    if (resume.size > MAX_RESUME_BYTES) {
      return Response.json({ error: "Resume is too large" }, { status: 413 });
    }
    const safeName = resume.name.replace(/[^\w.\- ]/g, "_").slice(0, 120);
    attachment = {
      filename: safeName,
      content: Buffer.from(await resume.arrayBuffer()).toString("base64"),
    };
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("Careers form: RESEND_API_KEY is not set");
    return Response.json({ error: "Email is not configured" }, { status: 500 });
  }

  const positionLabel =
    position === "commercial" ? "Commercial HVAC Technician" : "Residential HVAC Technician";

  const rows: [string, string][] = [
    ["Position", positionLabel],
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["City / Area", city || "—"],
    ["Experience", experience || "—"],
    ["Certifications / Licenses", certifications || "—"],
    ["Valid Driver's License", driversLicense || "—"],
    ["Has Own Hand Tools", ownTools || "—"],
    ["Authorized to Work in U.S.", workAuthorized || "—"],
    ["Available to Start", startDate || "—"],
    ["Resume", attachment ? `Attached (${attachment.filename})` : "Not provided"],
    ["About the Applicant", message || "—"],
  ];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Air Force HVAC Website <website@airforceteam.com>",
      to: [CAREERS_RECIPIENTS[position]],
      reply_to: `${name.replace(/[<>"]/g, "")} <${email}>`,
      subject: `New Job Application: ${positionLabel} — ${name}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<h2>New ${positionLabel} Application</h2><table cellpadding="6">${rows
        .map(
          ([k, v]) =>
            `<tr><td valign="top"><strong>${k}</strong></td><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}</table>`,
      ...(attachment && { attachments: [attachment] }),
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Careers form: Resend rejected the email", res.status, detail);
    return Response.json({ error: "Failed to send" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
