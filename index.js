const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.render("index");
})

app.get("/index.html", (req, res) =>{
    res.render("index");
})

app.get("/about.html", (req, res) =>{
    res.render("about");
})

app.get("/contact-me.html", (req, res) =>{
    res.render("contact-me");
})

app.listen(3000);