//dependencies
const express = require('express');
const app = express();
// const path = require('path');

//parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// //expect data from client
// app.post('/email', (req, res) => {
//     //todo
//     //send email
//     console.log('data', req.body);
//     res.json({ message: 'message recieved' })
// })
//html routes
require('./routes/htmlRoutes')(app);




//port
const PORT = process.env.PORT || 8080;

//start server
app.listen(PORT, () => { console.log(`Server listening on port: ${PORT}`); });