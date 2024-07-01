// db.js

const mongoose = require("mongoose");

// Replace 'mongodb://localhost:27017/your_database_name' with your MongoDB URI
// const dbURI = "mongodb://localhost/urlShortener";
const uri = "mongodb+srv://davidmide_db:cahHSo9fNwDrRGyM@cluster0.tso68h5.mongodb.net/?appName=Cluster0";
// mongoose.connect(uri);

// const db = mongoose.connection;

const db = main()
  .then((suss) => console.log(suss))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri).then(rr => console.log("connected succefully")).catch(err => console.log("error connect"))
}

// db.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// db.once('open', () => {
//   console.log('MongoDB connected successfully');
// });

module.exports = db;
