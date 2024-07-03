const mongoose = require("mongoose");
// require('dotenv').config();
require("dotenv").config()

const db_username = process.env.db_username;
const db_password = process.env.db_password

console.log("env:",db_password, db_username);
const uri = `mongodb+srv://${db_username}:${db_password}@cluster0.tso68h5.mongodb.net/?appName=Cluster0`;

const db = main()
  .then((suss) => console.log(suss))
  .catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(uri)
    .then((rr) => console.log("connected succefully"))
    .catch((err) => console.log("error connect"));
}

module.exports = db;
