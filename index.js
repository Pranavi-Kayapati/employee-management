const express = require("express");
const connection = require("./db");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const employeeRouter = require("./routes/employeeRouter");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/employees", employeeRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to database");
    console.log("Server is running on port 8080");
  } catch (error) {
    console.log(error);
  }
});
