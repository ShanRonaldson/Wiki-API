// ECHO is on.


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();


app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set("view engine", "ejs");

mongoose.connect(
    "mongodb://localhost:27017/wikiDB",
    {
        useUnifiedTopology:true,
        useNewUrlParser:true
    }
);

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

app.get("/", function(req, res){
    console.log("Page is working.");
});


app.listen(3000, function(req, res){
    console.log("server is running");
});
