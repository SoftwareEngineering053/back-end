const dotenv = require('dotenv').config();
const express = require('express');
const { mongooseConnect } = require('./mongodb_connection');


const app = express();

//declaration of all routes
const usersRoutes = require('./routes/users');
const coursesRoutes = require('./routes/courses');
app.use('/', usersRoutes);
app.use('/', coursesRoutes);

app.set("view engine", "ejs");
app.set('views', "../../front-end/src/")
app.use(express.static('../../front-end/src/'))

//connect to mongoDB database
mongooseConnect();



app.get('/', function (req, res) {
    res.render("index");
});



/*app.get("/", function (req, res) {
    res.send(req.headers, req.originalUrl, req.method, req.body);
});*/

const listener = app.listen(process.env.PORT || 3000, () => { //defines the listener object that 'catches' the front-end requests
    console.log('Listening requests on port ' + listener.address().port)
});
