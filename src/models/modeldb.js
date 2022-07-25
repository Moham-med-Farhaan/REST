const mongoose = require("mongoose");
const Mongo_URI =
  "mongodb+srv://Mohamedfarhaan:mongodb1234@reactdb.ybaxk.mongodb.net/?retryWrites=true&w=majority";
//connection
mongoose.connect(Mongo_URI || "localhost://restdb", {
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
