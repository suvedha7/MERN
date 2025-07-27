const { getdb, adddb, edb, upddb, deldb } = require("../controller/controller");
const express = require("express");

const routes = express.Router();

routes.get("/", getdb);
routes.post("/add", adddb);
routes.get("/edit/:id", edb);
routes.post("/update", upddb);
routes.get("/delete/:id", deldb);

module.exports = routes;
