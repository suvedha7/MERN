const express = require("express");
const routes = require("./routes/routes");
const conn = require("./db");

conn();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", routes);

app.listen(4001, () => {
  console.log("Server is running ...");
});
