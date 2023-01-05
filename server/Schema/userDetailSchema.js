

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     name: String,
     email: String,
     phone: String,
     course: String,
     center: String,
     date: {
          type: Date,
          default: Date.now()
     }

});

const Users = new mongoose.model("intrested_user_details", userSchema);
module.exports = Users;