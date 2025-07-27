const dbModel = require("../model/model");

const getdb = async (req, res) => {
  try {
    const op = await dbModel.find();
    res.render("index", { op: op });
  } catch (error) {
    console.log(error);
  }
};
const adddb = async (req, res) => {
  try {
    const data = new dbModel({
      id: req.body.id,
      name: req.body.name,
      age: req.body.age,
    });
    await data.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const edb = async (req, res) => {
  const op = await dbModel.findOne({ id: req.params.id });
  res.render("edit", { op: op });
};

const upddb = async (req, res) => {
  try {
    const data = await dbModel.updateOne(
      { id: req.body.id },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
        },
      }
    );
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const deldb = async (req, res) => {
  try {
    await dbModel.deleteOne({ id: req.params.id });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getdb, adddb, edb, upddb, deldb };
