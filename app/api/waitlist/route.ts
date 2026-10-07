// app/api/waitlist/route.ts
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  const { email } = await req.json().catch(() => ({}));

  if (typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    await sendEmail({
      replyTo: email,
      subject: "New Limitify notification signup",
      text: `A visitor asked to receive Limitify updates.\n\nEmail: ${email}`,
    });
  } catch (error) {
    console.error("Failed to send waitlist email", error);
    return NextResponse.json({ error: "Unable to send email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
