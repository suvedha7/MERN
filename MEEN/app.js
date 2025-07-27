const conn = require("./db");
const router = require("./routes/routes");
const express = require("express");
const session = require("express-session");

conn();

const app = express();

app.use(
  session({
    secret: "suvedha",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", router);

app.listen("4000", () => {
  console.log("Server is running ...");
});
