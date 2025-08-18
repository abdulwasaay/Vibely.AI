const express = require("express");
const tokenAuthentication = require("../middlewares/authMiddleware");
const { promptValidator } = require("../services/validators/UserFieldsValidator");
const textToImageController = require("../controllers/textToImageController");
const AIRouter = express.Router();

AIRouter.post("/model", promptValidator(), tokenAuthentication, textToImageController)

module.exports = AIRouter