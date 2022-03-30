const express = require("express");
const app = express();

const port = 5500;

app.get("/",(req,res)=>{
    res.send("<h2>Hello There!!</h2>")
})

app.listen(port, ()=>{
    console.log("Server started at port : "+port)
})
