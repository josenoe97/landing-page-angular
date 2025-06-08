const express = require('express');
const router = express.Router();
const { sendNewsletterEmail } = require('../controllers/newsletter.controller');

router.post('/send-newsletter', sendNewsletterEmail);

module.exports = router;
