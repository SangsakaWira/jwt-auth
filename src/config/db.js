const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect("mongodb://localhost/login-auth-jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  });

  mongoose.connection.once("connected", () => console.log("DB Connected"));
};