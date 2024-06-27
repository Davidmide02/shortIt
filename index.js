const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // console.log(req.body.url);
  res.render("index");
});

app.post("/", (req, res) => {
  //    console.log( "body",req.body)
  console.log(req.body.url);

  //    res.render(`Hello ${req.body}`)
});

app.listen(process.env.PORT || 3000);
