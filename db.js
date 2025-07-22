const mongoose = require("mongoose");

const conn = () => {
  mongoose
    .connect("mongodb://localhost:27017/mvc")
    .then((result) => {
      console.log("Connected ...");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = conn;
