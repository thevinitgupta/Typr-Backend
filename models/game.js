const mongoose = require("mongoose")
const {Schema} = mongoose;

const GameSchema = new Schema({
    users : {
        type : Array,
        default : [],
        required : true
    },
    winner : {
        type : Schema.Types.ObjectId,
        required : true
    },
    timestamp : {
        type : Date,
        required : true
    },
    scores : {
        type : Schema.Types.Map,
        required : true
    },
    errors : {
        type : Schema.Types.Map,
        required : true
    }
});

module.exports = mongoose.model("game",GameSchema);