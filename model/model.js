const conn = require("../db");
const mongoose = require("mongoose");

const dbSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const dbModel = mongoose.model("db", dbSchema);

module.exports = dbModel;
