const { regModel } = require("../models/dbModel");
const bcrypt = require("bcryptjs");
const session = require("express-session");

const regInsert = async (req, res) => {
  const { name, email, password } = req.body;
  const epassword = await bcrypt.hash(password, 10);
  await regModel.create({ name, email, password: epassword });
  res.redirect("login");
};

const logCheck = async (req, res) => {
  const { email, password } = req.body;
  const data = await regModel.findOne({ email });
  if (data && (await bcrypt.compare(password, data.password))) {
    req.session.username = data.name;
    res.redirect("dashboard");
  } else {
    res.redirect("login");
  }
};

module.exports = { regInsert, logCheck };
