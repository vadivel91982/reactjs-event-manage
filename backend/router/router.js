"use strict";
const express = require("express");
const router = express.Router();

// Admin and user router path
const user = require("../app/modules/user/routers/router");
const dashboard = require("../app/modules/dashboard/routers/router");

router.use("/api", user);
router.use("/api/dashboard", dashboard);
module.exports = router;
