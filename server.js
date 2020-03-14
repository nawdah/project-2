// importing express, our node.js framework
var express = require('express');
var app = express();

// set port
var port = process.env.PORT || 8080

// allows us to serve static files in our folder (CSS, images, etc)
app.use(express.static(__dirname));

// routes
app.get("/", function(req, res){
    res.render("index");
})

// server needs to listen for requests 
app.listen(port, function(){
    console.log("app running");
});



