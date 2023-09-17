import { Request, Response } from "express";
import nodemailer from "nodemailer";

type MailFromType = "name" | "address";

type MessageType = {
  from: Record<MailFromType, string> | string;
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
};

// @desc    Send Email
// @route   GET /api/v3/contact/send-message
// @access  Public
export const sendMessage = (req: Request, res: Response): void => {
  const { name, email, message }: Record<string, string> = req.body;

  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    host: process.env.SMTP,
    port: +process.env.SMTP_PORT,
    secure: process.env.NODE_ENV === "production",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const msg: Required<MessageType> = {
    from: {
      name: name,
      address: process.env.EMAIL,
    },
    to: process.env.MAIL_TO,
    subject: "Contact Form Submission",
    text: `${name} said: ${message}`,
    replyTo: email,
  };

  transporter.sendMail(msg, (err: Error, info) => {
    err
      ? res.status(400).send("Something went wrong!")
      : res.status(201).send("Mail sent successfully!");
  });
};
