const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const port = 5500;

app.get("/",(req,res)=>{
    res.send("<h2>Hello There!!</h2>")
})

app.listen(port, ()=>{
    console.log("Server started at port : "+port)
})
