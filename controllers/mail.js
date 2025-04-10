const nodemailer = require("nodemailer");
require("dotenv").config();

// // const html = `
// // <h1> Hi there</h1>
// // <p> trying out nodemailer to send mails</P>
// // `;

// //const email = ["bassseynancy2@gmail.com", "stephenadeyemo@gmail.com"];

async function sendMail(toEmail, subject, htmlContent) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    const info = await transporter.sendMail({
      from: '"Faith" <faithbassey020@gmail.com>',
      to: toEmail,
      subject: subject,
      html: htmlContent,
    });
    console.log(`email sent to: ${toEmail}`);
    console.log(`message id: ${info.messageId} `);
  } catch (error) {
    console.error(`error sending email to: ${toEmail}`, error);
    throw new Error(`failed to send email`);
  }
}

module.exports = { sendMail };
