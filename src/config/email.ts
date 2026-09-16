// Update these values with your email configuration
export const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'your-email@denisepotter.com',
    pass: process.env.SMTP_PASSWORD || 'your-app-password',
  },
  from: process.env.SMTP_FROM || 'your-email@denisepotter.com',
  to: process.env.SMTP_TO || 'therapy@denisepotter.com',
};
