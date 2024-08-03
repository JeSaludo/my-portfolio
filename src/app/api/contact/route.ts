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
      to: process.env.RECEIVER_EMAIL_ADDRESS,
      subject: "New Message from JS Web Portfolio",
      text: `Dear Recipient,
    
    You have received a new message from your web portfolio.
    
    Sender Name: ${fname}
    
    Sender Email: ${email}
    
    Message:
    ${message}
    
    Best regards,
    Web Portfolio
    `,
    };

    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting us",
      text: `Hi ${fname},\n\nThank you for reaching out. I have received your message and I will get back to you shortly.\n\nYour message: ${message}\n\nBest regards,\nJan Eris Saludo`,
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
