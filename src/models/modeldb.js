const mongoose = require("mongoose");
require("dotenv/config");
const Mongo_URI = process.env.DB_URI;

//connection
mongoose.connect(Mongo_URI || "mongodb://restdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//schema
const Schema = new mongoose.Schema({
  title: String,
  body: String,
  num: Number,
});
//model variable
const modelvar = mongoose.model("modelvar", Schema);
module.exports = modelvar;
