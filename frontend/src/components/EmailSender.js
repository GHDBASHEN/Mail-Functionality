// /src/components/EmailSender.jsx
import React, { useState } from 'react';
import { sendIdToEmp, sendOtpEmail, sendIdToUser } from '../services/MailService';

const EmailSender = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
    url: '',
    otp: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendIdToEmp = async () => {
    try {
      await sendIdToEmp({
        name: formData.name,
        subject: formData.subject,
        email: formData.email,
        message: formData.message
      });
      alert('Email sent to employee!');
    } catch (error) {
      alert('Error sending ID to employee.');
    }
  };

  const handleSendOtp = async () => {
    try {
      await sendOtpEmail({
        email: formData.email,
        otp: formData.otp
      });
      alert('OTP email sent!');
    } catch (error) {
      alert('Error sending OTP email.');
    }
  };

  const handleSendIdToUser = async () => {
    try {
      await sendIdToUser({
        name: formData.name,
        subject: formData.subject,
        email: formData.email,
        message: formData.message,
        url: formData.url
      });
      alert('ID email sent to user!');
    } catch (error) {
      alert('Error sending ID to user.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Send Email</h2>
      <input name="name" placeholder="Name" onChange={handleChange} /><br />
      <input name="subject" placeholder="Subject" onChange={handleChange} /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <textarea name="message" placeholder="Message or ID" onChange={handleChange} /><br />
      <input name="url" placeholder="URL (for ID to User)" onChange={handleChange} /><br />
      <input name="otp" placeholder="OTP (for OTP Email)" onChange={handleChange} /><br />

      <button onClick={handleSendIdToEmp}>Send ID to Employee</button><br />
      <button onClick={handleSendOtp}>Send OTP</button><br />
      <button onClick={handleSendIdToUser}>Send ID to User</button>
    </div>
  );
};

export default EmailSender;
