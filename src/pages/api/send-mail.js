import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use 'gmail' or configure SMTP
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email app password
    },
  });

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'naufalghafir123@gmail.com',
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    return res.status(500).json({ message: 'Error sending email', error });
  }
}
