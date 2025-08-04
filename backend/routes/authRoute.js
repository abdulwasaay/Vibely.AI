const express = require("express");
const { UserNameValidator, EmailValidator, PasswordValidator } = require("../services/validators/UserFieldsValidator");
const runValidation = require("../services/Validate");
const signupController = require("../controllers/authControllers/signupController");
const router = express.Router();

const validations = [
    UserNameValidator(),
    EmailValidator(),
    PasswordValidator()
]
router.post("/signup", runValidation(validations), signupController)

module.exports = router