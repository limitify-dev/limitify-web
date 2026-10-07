"use server";

import { sendEmail } from "@/lib/email";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: Record<string, string>;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: bots fill this hidden field, humans never see it.
  if (formData.get("website")) return { status: "success" };

  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const values = {
    name: get("name"),
    email: get("email"),
    company: get("company"),
    type: get("type"),
    timeline: get("timeline"),
    message: get("message"),
  };

  const errors: NonNullable<ContactState["errors"]> = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!emailRe.test(values.email)) errors.email = "Enter a valid email address.";
  if (values.message.length < 20)
    errors.message = "Tell us a little more (at least a couple of sentences).";
  if (values.message.length > 4000) errors.message = "That's a bit long, please shorten it.";

  if (Object.keys(errors).length) return { status: "error", errors, values };

  try {
    const sender = values.name.replace(/[\r\n]+/g, " ");
    const company = values.company.replace(/[\r\n]+/g, " ");

    await sendEmail({
      replyTo: values.email,
      subject: `New inquiry from ${sender}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Company: ${values.company || "-"}`,
        `Project type: ${values.type || "-"}`,
        `Timeline: ${values.timeline || "-"}`,
        "",
        values.message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
      values,
    };
  }

  return { status: "success" };
}
