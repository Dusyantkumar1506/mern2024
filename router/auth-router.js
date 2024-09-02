const express = require("express");
const router = express.Router();
// const { home, register } = require("../controller/auth-controller"); old way
const authcontrollers = require("../controller/auth-controller");

router.route("/").get(authcontrollers.home);
router.route("/register").get(authcontrollers.register);

module.exports = router;
