const express = require("express");
const mongooes = require("mongoose");
const Link = require("./models/short");
const db = require("./models/db");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const linkDis = await Link.find();
    console.log(linkDis);
    res.render("index", (shortUrls = linkDis));
  } catch (err) {
    console.error("Error retrieving short link:", err);
  }
});

app.post("/", async (req, res) => {
  console.log(req.body.url);
  try {
    const originalUrl = req.body.url;
    const shortenedLink = new Link({
      originalUrl,
    });
    console.log(shortenedLink.originalUrl);
    await shortenedLink.save();
  } catch (err) {
    console.error("Error creating short link:", err);
  }

  res.redirect("/");
});

app.listen(process.env.PORT || 3001);
// N1NhiEkN9X6qRc45
// davidmide07
// cahHSo9fNwDrRGyM
// mongodb+srv://davidmide_db:<password>@cluster0.tso68h5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
