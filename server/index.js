const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/user");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1/Byte_hunt_users")
  .then(() => console.log("Success"));

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  UserModel.create({ name, email, password })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Login Sucessfully");
      } else {
        res.json("Password is Incorrect");
      }
    } else {
      res.json("No user exist");
    }
  });
});

app.listen(3001, () => {
  console.log("running");
});
