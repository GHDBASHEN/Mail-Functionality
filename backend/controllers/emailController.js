import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PSWD,
  },
});

export const sendIdToEmp = async (req, res) => {
  const { name, subject, email, message } = req.body;

  try {
    const mailOptions = {
      from: `"Deandra" <${process.env.MAIL_ADDRESS}>`,
      to: email,
      subject,
      text: `Hello ${name},\n\n${message}`,
      html: `<p>Hello ${name},</p><p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error...', error });
  }
};

export const sendOtpEmail = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const mailOptions = {
      from: `"Deandra" <${process.env.MAIL_ADDRESS}>`,
      to: email,
      subject: 'Your OTP Code',
      text: `Hello, Your OTP is: ${otp}`,
      html: `<p>Hello,</p><p>Your OTP is: <strong>${otp}</strong></p>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'OTP email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error...', error });
  }
};

export const sendIdToUserMethod = async (req, res) => {
  const { name, subject, email, message, url } = req.body;

  try {
    const mailOptions = {
      from: `"Deandra" <${process.env.MAIL_ADDRESS}>`,
      to: email,
      subject,
      text: `Hello ${name},\n\nID: ${message}\n\nBest regards,\nDeandra`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Deandra Notification</h2>
          <p>Hello <strong>${name}</strong>,</p>
          <p>Your requested ID is: <strong>${message}</strong></p>
          <p>Use the following Link to register & use this id:</p>
          <a href="${url}" style="background-color:#4A90E2; color:#fff; padding:10px 15px; text-decoration:none; border-radius:5px;">Click Here</a>
          <p>Best regards,<br/>Deandra Team</p>
        </div>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'ID email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error...', error });
  }
};
