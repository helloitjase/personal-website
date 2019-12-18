const nodemailer = require('nodemailer');
const cred = require('./config.js');

const transport = {
  service: 'gmail',
  auth: {
    user: cred.user,
    pass: cred.password,
  },
};

const transporter = nodemailer.createTransport(transport);


const generateOptions = (info) => {
  const {
    name, email, subject, message,
  } = info;
  const mailOptions = {
    to: 'jason.sl.chen@gmail.com',
    subject,
    html: `Sender: ${name}<br>From: ${email}<br>Message: ${message}`,
  };
  return mailOptions;
};

module.exports = {
  transporter,
  generateOptions,
};
