var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

/*app.use("/", function (req, res, next) {
  console.log("Request Url:" + req.url);
  next();
});*/

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html> <html lang="en"> <head> <link rel="stylesheet" href = '/assets/style.css'
  <title>Document</title> </head> 
  <body> <h1>Document</h1>
  `);
});

app.get("/person/:id", function (req, res) {
  res.render("person", { ID: req.params.id });
});

app.get("/numbers/:id", function (req, res) {
  res.render("numbers", { number: req.params.id });
}); // Con esta función Estaremos recibiendo numeros para mandarlos al archivo numbers.ejs

app.listen(port);
