const userRoute = require("express").Router();
const userController = require("../controllers/user.controller");

userRoute.post("/signUp", userController.signUp);

userRoute.get("/signIn", userController.signIn);

module.exports = userRoute;
