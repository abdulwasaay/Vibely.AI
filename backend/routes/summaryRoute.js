const express = require("express");
const summaryController = require("../controllers/summaryController");
const tokenAuthentication = require("../middlewares/authMiddleware");
const summaryRouter = express.Router();

summaryRouter.get("/data", tokenAuthentication, summaryController)

module.exports = summaryRouter