const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ImagesSchema = new Schema({
    url : {
        type : String 
    }
});

const Image = mongoose.model("Image" , ImagesSchema);

module.exports =Image