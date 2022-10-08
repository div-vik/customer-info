const express = require("express");
const MongoClient = require("mongodb").MongoClient

const app = express();

app.use(express.json())

var database

app.use("/", (req, res) => {
    res.send("MongoDB");
})

app.listen(5000, () => {
    MongoClient.connect('mongodb://localhost:2707', { useNewParser: true }, (error, result)=>{
        if(error) throw error
        database = result.db("customerInfo")
        console.log("Connection Successfully")
    })
})