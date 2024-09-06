import nodemailer from "nodemailer";
import { otpService } from "./otpService.js";

const transporter = nodemailer.createTransport({
    host: (process.env.SMTP_HOST = smtp - relay.brevo.com),
    port: SMTP_PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
    },
});

export const sendMail = async (to, subject, text) => {
    try {
        const { email } = req.body;
        const otp = await otpService;

        var mailOptions = {
            from: process.env.FROM_EMAIL,
            to: email,
            subject: "OTP send form JMS  institute",
            text: `Your OTP is: ${otp}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent successfully!");
            }
        });
    } catch (error) {
        console.log("Error where from send Mail", error);
    }
};
