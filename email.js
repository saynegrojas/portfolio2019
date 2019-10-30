//import nodemailer
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

// config for mailgun
const auth = {
    auth: {
        api_key: '0dff9f14416077f3ae74e7ce498e78a1-816b23ef-c4401e4b',
        domain: 'sandbox9f71f28f06d947c2b9e87f0f1f0c3f0f.mailgun.org'
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