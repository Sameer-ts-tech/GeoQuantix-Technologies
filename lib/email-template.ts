type ContactEmailProps = {
  name: string
  email: string
  organization?: string
  message: string
}

export function contactEmailTemplate({
  name,
  email,
  organization,
  message,
}: ContactEmailProps) {
  return `
  <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:24px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; padding:24px;">
      <h2 style="color:#111827;">New Contact Form Submission</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Organization:</strong> ${organization || "N/A"}</p>

      <hr style="margin:16px 0;" />

      <p style="white-space:pre-line;">${message}</p>

      <hr style="margin:16px 0;" />

      <p style="font-size:12px; color:#6b7280;">
        This email was generated from your website contact form.
      </p>
    </div>
  </div>
  `
}
