const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
  name: String,
  active: Boolean
});

module.exports = mongoose.model("cat", catSchema);
