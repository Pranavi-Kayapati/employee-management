const express = require("express");
const empModel = require("../modals/employeeModal");

const employeeRouter = express.Router();

employeeRouter.get("/", async (req, res) => {
  try {
    let employees = await empModel.find({});
    res.status(200).send({ data: employees });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

employeeRouter.post("/add", async (req, res) => {
  try {
    const employee = new empModel(req.body);
    await employee.save();
    res.status(200).send({
      message: "employee saved successfully",
      employee: employee,
    });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

employeeRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await empModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Employee Updated successfully" });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

employeeRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await empModel.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .send({ msg: "Employee Deleted successfully", employee: employee });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

module.exports = employeeRouter;
