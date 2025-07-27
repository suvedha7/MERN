const mongoose = require("mongoose");

const regSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const regModel = mongoose.model("register", regSchema);

const proSchema = mongoose.Schema({
  pid: {
    type: String,
    required: true,
    unique: true,
  },
  pname: {
    type: String,
    required: true,
  },
  pcategory: {
    type: String,
    required: true,
  },
  pprice: {
    type: Number,
    required: true,
    min: 1,
  },
  pqty: {
    type: Number,
    required: true,
    min: 0,
  },
  pdesc: {
    type: String,
    required: true,
  },
});

const proModel = mongoose.model("product", proSchema);

module.exports = { regModel, proModel };
