const express = require("express");
const { UserNameValidator, EmailValidator, PasswordValidator } = require("../services/validators/UserFieldsValidator");
const runValidation = require("../services/Validate");
const signupController = require("../controllers/authControllers/signupController");
const { default: forgetController } = require("../controllers/authControllers/forgetController");
const router = express.Router();

const signupValidations = [
    UserNameValidator(),
    EmailValidator(),
    PasswordValidator()
]

const forgetPassowrdValidations = [
    EmailValidator()
]
router.post("/signup", runValidation(signupValidations), signupController)
router.post("/forgotpassword", runValidation(forgetPassowrdValidations), forgetController)

module.exports = router