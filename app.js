var express = require("express");
var app = express();


app.get("/home", function(req, res) {
   res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
   var thing = req.params.thing;
   
   res.render("love.ejs", {thingVar: thing});
});





// listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Server is running"); 
});