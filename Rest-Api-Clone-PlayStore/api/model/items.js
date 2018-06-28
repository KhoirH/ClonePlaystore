const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    name : {
        type : String 
    },    
    categories :{
        type : String
    },
    size : {
        type : String
    },
    download :{
        type : Number
    },
    rating : {
        type : Number
    },
    gendre : {
        type : String
    },
    description : {
        type : String
    },
    thumbnail : {
        type : String
    },
    mainImage : {
        type:String
    },
    createdAt : {
        type: Date, 
        default: Date.now 
    },
    cash : {
        type : Number , 
        default : 0
    },
    advertisement: {
        type : Boolean,
        default : false
    }
    // ,
    // comments :
    //     [{ type: Schema.Types.ObjectId  ,ref :"Comment"}]
    ,
    images  :
        [{ type : Schema.Types.ObjectId , ref:"Image"}]
})

Item = mongoose.model("Item"  , ItemsSchema);

module.exports = Item