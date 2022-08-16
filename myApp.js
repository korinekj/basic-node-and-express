require("dotenv").config();

let express = require("express");
let app = express();

//Logger middleware -> zavolá se při každém requestu na server
app.use((req, res, next) => {
  console.log(req.method + " " + req.url + " - " + req.ip);
  next();
});

//Serve static assets (style.css ve složce public)
app.use("/public", express.static(__dirname + "/public"));

//Serve an html file
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

//Serve JSON on a specific Route
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

module.exports = app;
