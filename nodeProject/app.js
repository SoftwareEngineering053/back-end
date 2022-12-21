const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

console.log(process.env.DB_HOST);

app.get("/", function (req, res) {
    res.send(req.headers, req.originalUrl, req.method, req.body);
});