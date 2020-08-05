"use strict";
const express = require("express");
const router = express.Router();

//importing the controller
const gainersController = require("../controller/gainers");

router.post("/gainNifyFiveHundreds", gainersController.gainersNifty500);

const eventListController = require("../controller/eventList");
router.get("/event-list", eventListController.list)

module.exports = router;
