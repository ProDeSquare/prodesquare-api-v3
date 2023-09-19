import { Request, Response } from "express";
import SendMail from "../helpers/mail.helper";

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
export const sendMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email, message }: Record<string, string> = req.body;

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

  try {
    await SendMail(msg);
    res.status(200).send("Mail Sent Successfully");
  } catch (err) {
    res.status(400).json(err);
  }
};
