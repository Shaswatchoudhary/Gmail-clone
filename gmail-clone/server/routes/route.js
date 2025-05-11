import express from 'express';
import { saveSendEmails, getEmails, toggleStarredEmail, deleteEmails, moveEmailsToBin } from '../controller/email-controller.js';

const router = express.Router();

// Handle preflight requests for all routes
router.options('*', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    res.sendStatus(200);
});

// Email routes
router.post('/save', saveSendEmails);
router.post('/save-draft', saveSendEmails);
router.get('/emails/:type', getEmails);
router.post('/starred', toggleStarredEmail);
router.delete('/delete', deleteEmails);
router.post('/bin', moveEmailsToBin);

// Health check endpoint
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'API is running' });
});

export default router;