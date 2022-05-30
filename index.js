const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) =>{
    let path = "./views/";

    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/index.html":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about.html":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/contact-me.html":
            path += "contact-me.html";
            res.statusCode = 200;
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;

    }

    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.end(data);
        }
    })



}).listen(3000, "localhost");