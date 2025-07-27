const { proModel } = require("../models/dbModel");

const dashdata = async (req, res) => {
  if (!req.session.username) {
    return res.redirect("/login");
  }
  const data = await proModel.find();
  const msg = req.query.msg;
  res.render("dashboard", {
    username: req.session.username,
    data,
    search: "",
    msg,
  });
};

const addProduct = async (req, res) => {
  const { pid, pname, pcategory, pprice, pqty, pdesc } = req.body;
  await proModel.create({ pid, pname, pcategory, pprice, pqty, pdesc });

  res.redirect("/dashboard?msg=Product added successfully");
};

const editdata = async (req, res) => {
  const data = await proModel.findOne({ pid: req.params.pid });
  res.render("edit", { data: data });
};

const editProduct = async (req, res) => {
  const { pid, pname, pcategory, pprice, pqty, pdesc } = req.body;
  await proModel.updateOne(
    { pid: pid.trim() },
    {
      $set: { pname, pcategory, pprice, pqty, pdesc },
    }
  );
  res.redirect("/dashboard?msg=Product edited successfully");
};

const deleteProduct = async (req, res) => {
  const data = await proModel.deleteOne({ pid: req.params.pid });
  res.redirect("/dashboard?msg=Product deleted successfully");
};

const searchProduct = async (req, res) => {
  const { inp, filter } = req.query;
  let data = [];
  let msg = "";
  if (filter == "name") {
    data = await proModel.find({ pname: { $regex: inp, $options: "i" } });
  } else if (filter == "category") {
    data = await proModel.find({ pcategory: { $regex: inp, $options: "i" } });
  } else {
    data = [];
  }
  res.render("dashboard", {
    username: req.session.username,
    data,
    search: inp,
    msg,
  });
};

module.exports = {
  dashdata,
  addProduct,
  editProduct,
  editdata,
  deleteProduct,
  searchProduct,
};
