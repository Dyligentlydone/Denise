import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Import email configuration
    const { emailConfig } = await import('@/config/email');

    // Create a transporter object using the configuration
    const transporter = nodemailer.createTransport({
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      auth: emailConfig.auth,
    });

    // Send mail with defined transport object
    await transporter.sendMail({
      from: `"${name}" <${emailConfig.from}>`,
      to: emailConfig.to,
      subject: `New Contact Form Submission: ${service || 'General Inquiry'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Service: ${service || 'Not specified'}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
