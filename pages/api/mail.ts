// pages/api/mail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);
type Data = {
  message: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = req.body;
    const msg = `Name: ${name}\r\n Email: ${email}\r\n Message: ${message}`;
    const data = {
      to: "rekoke92@gmail.com",
      from: "rekoke92@gmail.com",
      subject: `${name.toUpperCase()} sent you a message from Panorame Contact Form`,
      text: `Email => ${email}`,
      html: msg.replace(/\r\n/g, "<br>"),
    };
    try {
      await sendgrid.send(data);
      res.status(200).json({ message: "Your message was sent successfully." });
    } catch (err) {
      res
        .status(500)
        .json({ message: `There was an error sending your message. ${err}` });
    }
  }
}
