// /src/services/MailService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/email'; // Update if deployed

export const sendIdToEmp = async (data) => {
  console.log("Loaded Email:", process.env.MAIL_ADDRESS);
console.log("Loaded Password:", process.env.MAIL_PSWD ? "Loaded ✅" : "❌ NOT loaded");

  return axios.post(`${API_URL}/send-id-to-emp`, data);
};

export const sendOtpEmail = async (data) => {
  return axios.post(`${API_URL}/send-otp`, data);
};

export const sendIdToUser = async (data) => {
  return axios.post(`${API_URL}/send-id-to-user`, data);
};
