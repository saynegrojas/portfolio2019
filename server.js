//dependencies
const express = require('express');
const app = express();
const path = require('path');
const sendMail = require('./email');

//parsing 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware
require('./middleware/middleware')(app);

//expect data from client
app.post('/contact', (req, res) => {

    //todo
    const { email, subject, text } = req.body;
    //send email
    sendMail(email, subject, text, function (err, data) {
        if (err) {
            console.log('error: ', err);
            return res.status(500).json({ message: err.message || 'internal error' });
        } else {
            console.log('email sent!');
            return res.json({ message: 'email sent!' });
        }
    });
});

//html routes
require('./routes/htmlRoutes')(app);

//port
const PORT = process.env.PORT || 8080;

//start server
app.listen(PORT, () => { console.log(`Server listening on port: ${PORT}`); });