
const mongoose = require("mongoose");

const uri = "mongodb+srv://davidmide_db:cahHSo9fNwDrRGyM@cluster0.tso68h5.mongodb.net/?appName=Cluster0";
// mongoose.connect(uri);



const db = main()
  .then((suss) => console.log(suss))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri).then(rr => console.log("connected succefully")).catch(err => console.log("error connect"))
}


module.exports = db;
