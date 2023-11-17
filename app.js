const express = require("express");
const app = express();
var cors = require("cors");
require("./database/db");

const bodyParser = require("body-parser");
const User = require("./models/user");
const port = 3001;
app.use(bodyParser.json());

// app.use("*", (req, res) => {
//   return res.status(404).json({
//     success: false,
//     message: "API endpoint doesnt exist",
//   });
// });
app.use(cors());
app.post("/", async (req, res) => {
  // Extract user data from the request body
  const { name, email } = req.body;

  // Create a new user instance
  const newUser = new User({
    name,
    email,
  });
  console.log(newUser);

  // Save the user to the database
  try {
    const savedUser = await newUser.save();
    console.log("User saved successfully:", savedUser);
    res.status(201).json(savedUser);
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/users", async (req, res) => {
  try {
    // Find all users in the database
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error("Error retrieving users:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Example of app listening on port ${port}!`);
});
