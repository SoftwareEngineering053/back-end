const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const swaggerUi=require('swagger-ui-express');
const swaggerDocument=require('../swagger.json');

console.log(process.env.DB_HOST);

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.get("/", function (req, res) {
    res.send(req.headers, req.originalUrl, req.method, req.body);
});
