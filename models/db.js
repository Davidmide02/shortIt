// db.js

const mongoose = require("mongoose");

// Replace 'mongodb://localhost:27017/your_database_name' with your MongoDB URI
const dbURI = "mongodb://localhost/urlShortener";

mongoose.connect(dbURI);

// const db = mongoose.connection;

const db = main()
  .then((suss) => console.log(suss))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(dbURI);
}

// db.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// db.once('open', () => {
//   console.log('MongoDB connected successfully');
// });

module.exports = db;
