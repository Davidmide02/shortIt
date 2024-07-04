const mongoose = require("mongoose");

const db_username = process.env.DB_NAME;
const db_password = process.env.DB_PASSWORD;


const uri = `mongodb+srv://${db_username}:${db_password}@cluster0.tso68h5.mongodb.net/?appName=Cluster0`;

const db = main()

async function main() {
  await mongoose
    .connect(uri)
    .then((rr) => console.log("connected succefully"))
    .catch((err) => console.log("error connect to database",err.errmsg));
}

module.exports = db;
