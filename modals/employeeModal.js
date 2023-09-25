const mongoose = require("mongoose");

const empSchema = mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    department: String,
    salary: Number,
  },
  {
    versionKey: false,
  }
);

const empModel = mongoose.model("employees", empSchema);

module.exports = empModel;
