const express = require("express");
const mongooes = require("mongoose");
const UrlDb = require("./models/short");
const db = require("./models/db");
require("dotenv").config()

const db_username = process.env.USERNAMEDB
console.log("heree",db_username);

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const linkDis = await UrlDb.find();

    res.render("index", (shortUrls = linkDis));
  } catch (err) {
    console.error("Error retrieving short link:", err);
  }
});

app.post("/", async (req, res) => {
  try {
    const originalUrl = req.body.url;
    const shortenedLink = new UrlDb({
      originalUrl,
    });

    await shortenedLink.save();
  } catch (err) {
    console.error("Error creating short link:", err);
  }

  res.redirect("/");
});

app.get("/short/:shorturl", async (req, res) => {
  // extract the shorturl from the params
  const short = req.params.shorturl;

  // find from db
  UrlDb.findOne({ shortUrl: short })
    .then((suc) => {
      suc.clicks++;
      suc.save();
      res.redirect(suc.originalUrl);
    })
    .catch((err) => {
      res.statusCode(404);
      res.redirect(err);
    });
});

app.get("/delete/:UrlId", async (req, res) => {
  // extract the id
  const id = req.params.UrlId;

  // use id to find and delete
  UrlDb.findByIdAndDelete(id)
    .then((suc) => res.redirect("/"))
    .catch((err) => {
      res.statusCode(404);
      res.redirect(err);
    });
});

app.listen(process.env.PORT || 3000);

//  Restructure the styling
// delete url
//
