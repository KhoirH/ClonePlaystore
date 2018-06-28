const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    _userId : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    _itemId : {
        type : Schema.Types.ObjectId
    },
    body :{
        type  : String
    },
    like:{
    	type : Number
    },
    createdAt:{
		type : Date , 
		default : Date.now     	
    }
});

const Comments = mongoose.model("Comment" , CommentSchema);

module.exports = Comments