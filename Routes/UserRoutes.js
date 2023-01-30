const express =  require("express");
const UserRoutes = express.Router();

const {SignIn,SignUp} =  require("../controller/UserController.js");

UserRoutes.post("/signup",SignUp)
UserRoutes.post("/signin",SignIn)

module.exports = {UserRoutes}