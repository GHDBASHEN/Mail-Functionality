import express from 'express';
import { sendIdToEmp, sendOtpEmail, sendIdToUserMethod } from '../controllers/emailController.js';

const router = express.Router();

router.post('/send-id-to-emp', sendIdToEmp);
router.post('/send-otp', sendOtpEmail);
router.post('/send-id-to-user', sendIdToUserMethod);

export default router;
