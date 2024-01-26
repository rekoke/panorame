import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = req.body;
    const data = {
      to: "rekoke92@gmail.com",
      from: "pandry@panoramebali.com",
      subject: `${name.toUpperCase()} sent you a message from PanorameBali Contact Form`,
      react: EmailTemplate({ name: name, email: email, message: message }),
    };
    try {
      await resend.emails.send(data);
      res.status(200).json({ message: "Your message was sent successfully." });
    } catch (err) {
      res
        .status(500)
        .json({ message: `There was an error sending your message. ${err}` });
    }
  }
}
