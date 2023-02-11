const dotenv = require('dotenv').config();
const mongoose = require('mongoose');


const mongodbUri=process.env.DB_URI

//connection to mongoose
const mongooseConnect = () => {
    try{
        mongoose.set('strictQuery', true);
        mongoose.connect(
            mongodbUri,
            { useNewUrlParser: true, useUnifiedTopology: true },
            (err) => {
                if (err) return console.log("Error: ", err);
                console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
            }
        );
        console.log("Connected to database");
    }
    catch(e) {
        console.log("Couldn't connect to database");
    }
};


module.exports = { mongooseConnect };
