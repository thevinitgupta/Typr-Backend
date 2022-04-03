const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

require("./db/connections")

const port = process.env.PORT || 5500;

app.get("/",(req,res)=>{
    res.send("<h2>Hello There!!</h2>")
})

app.listen(port, ()=>{
    console.log("Server started at port : "+port)
})
