import { Resend } from "resend"
import { NextResponse } from "next/server"
import { contactEmailTemplate } from "@/lib/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const data = await req.json()

    await resend.emails.send({
      from: "Apex International <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: "New Contact Form Submission",
      replyTo: data.email,
      html: contactEmailTemplate(data),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}
