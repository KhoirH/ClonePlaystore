//import
const express  = require("express");
const mongoose =  require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

//routes
const users = require("./api/routes/users");
const images = require("./api/routes/images");
const items = require("./api/routes/items");
const comments = require("./api/routes/comments");

app.use(morgan('dev'));
app.use(bodyParser.json());

mongoose.connect(`mongodb+srv://clone_playstore:${process.env.MONGO_ATLAS_PW}@cluster0-xsars.mongodb.net/test?retryWrites=true`);
mongoose.Promise = global.Promise

app.use("/users" ,users );
app.use("/images" ,images );
app.use("/comments" ,comments );
app.use("/items" ,items );

app.use((req , res , next ) => {
    const error =  new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error ,req , res , next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    })
});


module.exports = app;