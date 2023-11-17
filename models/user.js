var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema(
  {
    name: { type: String },
    email: { type: String },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

var user = mongoose.model("user", User);

module.exports = user;
