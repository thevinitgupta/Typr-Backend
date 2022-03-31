const mongoose = require('mongoose')
const {Schema} = mongoose;

const UserSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type: String,
        minlength : 8 
    },
    verified : {
        type : Boolean,
        required : true,
        default : false
    },
    rank : {
        type : Number
    },
    score : {
        type : Number,
        required : true,
        default : 0
    },
    errors : {
        type : Number,
        required : true,
        default : 0
    },
    tokens : {
        type : Array,
        default : [],
        required : true
    },
    games : {
        type : Array,
        default : []
    }
});

module.exports = mongoose.model("user", UserSchema);