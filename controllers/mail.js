const nodemailer = require("nodemailer");
//const SMTPTransport = require("nodemailer/lib/smtp-transport");

//async function sendMail() {
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Process.env.MAIL_PORT,
  Secure: process.env.NODE_ENV, //true
  auth: {
    user: process.env.MAIL_USER,
    password: process.env.MAIL_PASSWORD,
  },
}); //as SMTPTransport.Options);
//}
export const sendEmail = async (dto) => {
  const { sender, recepient, subject, message } = dto;
  return await transporter.sendMail({
    from: sender,
    to: recepient,
    subject,
    //html: message,
    text: message,
  });
};
