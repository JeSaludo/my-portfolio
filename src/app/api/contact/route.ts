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

    await Promise.all([
      new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending email: ", error);
            reject(error);
          } else {
            console.log("Email sent: ", info.response);
            resolve(info);
          }
        });
      }),
      new Promise((resolve, reject) => {
        transporter.sendMail(clientMailOptions, (error, info) => {
          if (error) {
            console.error("Error sending confirmation email: ", error);
            reject(error);
          } else {
            console.log("Confirmation email sent: ", info.response);
            resolve(info);
          }
        });
      }),
    ]);
    return NextResponse.json({ success: "ok" });
  } catch (error: any) {
    return NextResponse.json({
      error: "Something went wrong: " + error.message,
    });
  }
}
