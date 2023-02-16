const dotenv = require('dotenv').config();
const express = require('express');
const { mongooseConnect } = require('./mongodb_connection');
const swaggerUI = require("swagger-ui-express")
const swaggerDoc = require("./docs/swagger.json")


const app = express();

//declaration of all routes
const apiRoutes = require('./routes/api_routes');
const appRoutes = require('./routes/app_routes');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
app.use('/api', apiRoutes);
app.use('/', appRoutes);

// view engine
app.set("view engine", "ejs");
app.set('views', process.env.STATIC_PATH)

// static paths
app.use(express.static(process.env.STATIC_PATH))
app.use("/users", express.static(process.env.STATIC_PATH))

//connect to mongoDB database
mongooseConnect();


const listener = app.listen(process.env.PORT || 3000, () => { //defines the listener object that 'catches' the front-end requests
    console.log('Listening requests on port ' + listener.address().port)
});
