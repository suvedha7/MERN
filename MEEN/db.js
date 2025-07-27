const mongoose = require("mongoose");

const conn = () => {
  mongoose
    .connect("mongodb://localhost:27017/meen")
    .then((result) => {
      console.log("Database connected ...");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = conn;
