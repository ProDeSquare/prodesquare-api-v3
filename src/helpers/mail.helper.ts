import nodemailer from "nodemailer";

const SendMail = async <T>(msg: T): Promise<void> => {
  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    host: process.env.SMTP,
    port: +process.env.SMTP_PORT,
    secure: process.env.NODE_ENV === "production",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    await transporter.sendMail(msg);
  } catch (err) {
    console.log("Email failed", err);
    throw new Error("Something went wrong!");
  }
};

export default SendMail;
