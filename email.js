//import nodemailer
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();
console.log(process.env.MAILGUN_API_KEY);
console.log(process.env.DOMAIN_KEY);
// config for mailgun
const auth = {
    auth: {
        api_key: process.env.MAILGUN_API_KEY,
        domain: process.env.DOMAIN_KEY
    }
}
const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'saynegrojas@yahoo.com',
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

module.exports = sendMail;