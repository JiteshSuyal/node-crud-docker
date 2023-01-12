const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    username: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    // isVerified: { type: Boolean, default: false },
    // type: {
    //   type: String,
    //   enum: ["client", "admin"],
    //   default: "client",
    // },
    // token: [],
    // otp: {
    //   type: Number,
    //   default: null,
    // },
    // code: {
    //   type: String,
    //   default: null,
    // },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
