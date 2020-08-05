"use strict";
const express = require("express");
const router = express.Router();
const schemas = require("../schemas/schemas");
const joiFactory = require("../../../../middleware/joiFactory");
//importing the controller
const userController = require("../controller/user");

router.get("/", userController.welcome);
router.post("/user", joiFactory(schemas, 'body'), userController.register)

module.exports = router;
