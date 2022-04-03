const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then((connect) => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("Error in connecting to MongoDB");
    console.log(err)
});