import { NextResponse } from "next/server";

const nodemailer = require('nodemailer');

export async function POST(req: any, res: any) {
    if (req.method === 'POST') {
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: 587,
                secure: false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
            });

            const { name, email, message, subject } = await req.json();
            const mailOptions = {
                from: email,
                to: process.env.SMTP_DESTINATION,
                subject: subject,
                text: `${message}  

${name} (${email}) `,
            };

            await transporter.sendMail(mailOptions);
            return NextResponse.json({ message: 'Message sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            return NextResponse.json({ message: 'Failed to send email' });
        }
    } else {
        return NextResponse.json({ message: 'Method Not Allowed' });
    }
}