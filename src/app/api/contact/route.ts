import { EmailTemplate } from "@/app/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, fname, message } = await reqBody;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",

      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_EMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_EMAIL_ADDRESS,
      to: "janerissaludo.work@gmail.com",
      subject: "New Message From  JS Web Portfolio",
      text: message,
    };

    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting me",
      text: `Hi ${fname},\n\nThank you for reaching out. We have received your message and will get back to you shortly.\n\nYour message: ${message}\n\nBest regards,\nJan Eris Saludo`,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json({ success: "ok" });
  } catch (error: any) {
    return NextResponse.json({
      error: "Something went wrong: " + error.message,
    });
  }
}
