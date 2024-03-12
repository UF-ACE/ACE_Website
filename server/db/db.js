const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.REACT_APP_URI;

mongoose
  .set('strictQuery', true)
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });


const db = mongoose.connection;

module.exports = db;
