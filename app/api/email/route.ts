import { Resend } from "resend";
import Email from "../../emails/index";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  await resend.emails.send({
    from: "sena6.gabriel@gmail.com",
    to: "sena6.gabriel@gmail.com",
    subject: "hello world",
    react: Email(),
  });

  return NextResponse.json({ status: "Ok" });
}
