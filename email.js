//import nodemailer
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

//environmental variable for auth keys
require('dotenv').config();

// config for mailgun
const auth = {
    auth: {
        api_key: process.env.MAILGUN_API_KEY,
        domain: process.env.DOMAIN_KEY
    }
}
//create a transport for nodemailer and pass mailgun transport with auth keys passed in 
const transporter = nodemailer.createTransport(mailGun(auth));

//sendmail function takes in paramters from user's input 
const sendMail = (email, subject, text, cb) => {

    //mailOption sets the passed in parameters to objects keys
    const mailOptions = {
        from: email,
        to: 'saynegrojas@yahoo.com',
        subject,
        text
    };

    //transporter gets all the passed in values and returns that data
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

module.exports = sendMail;