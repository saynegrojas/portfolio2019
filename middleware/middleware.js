const path = require('path');
const express = require('express');

module.exports = function (app) {
    //style
    app.use('/style', express.static('style'));
    //images
    app.use('/image', express.static('image'));
    //javascript
    app.use('/js', express.static('js'));
}