const express = require("express");
const Router = express.Router();
const dataController = require("../controllers/dataController");

Router.get("/data", dataController.sendData);


module.exports = Router;
