const path = require('path');

module.exports = function (app) {
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public", "index.html"));
    });
    app.get('/about', (req, res) => {
        res.sendFile(path.join(__dirname, "../public", "about.html"));
    });
    app.get('/project', (req, res) => {
        res.sendFile(path.join(__dirname, "../public", "project.html"));
    });
    app.get('/contact', (req, res) => {
        res.sendFile(path.join(__dirname, "../public", "contact.html"));
    });
}