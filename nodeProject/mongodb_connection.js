const mongoose = require('mongoose');
mongodbUri="mongodb+srv://user:Mongolodb23@cluster0.ovfysad.mongodb.net/?retryWrites=true&w=majority";
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
