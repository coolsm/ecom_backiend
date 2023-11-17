const express = require("express");
const app = express();
require("./database/db");
const port = 3001;

// app.use("*", (req, res) => {
//   return res.status(404).json({
//     success: false,
//     message: "API endpoint doesnt exist",
//   });
// });

app.get("/", (req, res) => {
  return res.status(201).json({
    success: true,
    message: "hello world",
  });
});

app.listen(port, () => {
  console.log(`Example of app listening on port ${port}!`);
});
