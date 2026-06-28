import { ContactMessage } from "../Models/mailerModel.js";
import nodemailer from "nodemailer";

// Create transporter ONCE
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const formMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save message to database
    const user = await ContactMessage.create({
      name,
      email,
      message,
    });

    // Send response immediately
    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: user,
    });

    // Send emails in background
    Promise.all([
      // Email to you
      transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `📩 New Portfolio Message from ${name}`,
        html: `
          <h2>New Portfolio Contact</h2>
          <hr/>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),

      // Auto reply to visitor
      transporter.sendMail({
        from: `"Dipendra Paudyal" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thank you for contacting me!",
        html: `
          <h2>Hello ${name},</h2>

          <p>Thank you for reaching out through my portfolio.</p>

          <p>I have received your message and will get back to you as soon as possible.</p>

          <br/>

          <p>Best Regards,</p>
          <h3>Dipendra Paudyal</h3>
          <p>MERN Stack Developer</p>
        `,
      }),
    ])
      .then(() => console.log("✅ Emails sent successfully"))
      .catch((err) => console.error("❌ Email Error:", err));

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
};