var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://coolsm1998:IubT298frsSgH4TY@cluster0.z287kia.mongodb.net/ecom_project?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 
});
mongoose.set("debug", true);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connection Successful!");
});
