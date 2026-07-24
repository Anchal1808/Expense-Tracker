const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

const PORT = 5000;

app.use(express.json());


connectDB();


app.get("/", (req,res)=>{
    res.send("Expense Tracker Backend Running");
});


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});