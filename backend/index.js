const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const allowedOrigin = [
    'http://localhost:5173',
];
const app = express();

// Middleware
app.use(cors({
    origin: allowedOrigin,
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());

// Route to handle contact form
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `
        You received a new message from your contact form:
        
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email. Try again later.' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => { // Added 'err' parameter to the callback
    if (err) {
        console.error('Server failed to start:', err); // Log the error
        return;
    }
    console.log(`🚀 Server running on port ${PORT}`);
});