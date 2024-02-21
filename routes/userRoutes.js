const express = require('express');
const { signUpController } = require('../controller/adminSignupController.js');
// const { authController } = require('../controller/admin.js');


const userRouter = express.Router();

userRouter.post("/signup", signUpController)
// userRouter.get("/login", loginController)
// userRouter.post("/admin", authController.login.bind(authController));



module.exports = userRouter;