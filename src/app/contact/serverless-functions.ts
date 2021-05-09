import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const sendMail = async (request: VercelRequest, response: VercelResponse): Promise<void> => {
  try {
    const { EMAIL_HOST, EMAIL_USER, EMAIL_PASS } = process.env;
    const { name, email, phone, entity, message } = request.body;
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });
    const mailOptions = {
      from: EMAIL_USER,
      to: `Yenny Castillo <${EMAIL_USER}>`,
      subject: 'Formulaire de contact Terre Tropicale',
      html: `<h1>Formulaire de contact Terre Tropicale</h1>
             <span>De: ${name}</span><br />
             <span>Adresse email: ${email}</span><br />
             <span>Téléphone: ${phone}</span><br />
             <span>Entity: ${entity}</span><br />
             <br />
             <br />
             <p>${message.replace(/\r\n|\n|\r/g, '<br />')}</p>`
    };
    await transporter.sendMail(mailOptions);
    response.status(200).end();
  } catch {
    response.status(500).end();
  }
};

export default sendMail;
