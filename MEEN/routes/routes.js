const { regInsert, logCheck } = require("../controllers/regController");
const {
  dashdata,
  addProduct,
  editdata,
  editProduct,
  deleteProduct,
  searchProduct,
} = require("../controllers/proController");
const express = require("express");

const router = express.Router();

// register login

router.get("/", (req, res) => {
  res.render("register");
});
router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", regInsert);

router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/login", logCheck);

router.get("/dashboard", dashdata);

// product logout

router.get("/product/add", (req, res) => {
  res.render("add");
});
router.post("/add", addProduct);

router.get("/product/edit/:pid", editdata);
router.post("/edit", editProduct);

router.get("/product/delete/:pid", deleteProduct);

router.get("/product/search", searchProduct);

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.render("login");
});

module.exports = router;
