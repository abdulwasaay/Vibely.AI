const express = require("express");
const { UserNameValidator, EmailValidator, PasswordValidator } = require("../services/validators/UserFieldsValidator");
const runValidation = require("../services/Validate");
const signupController = require("../controllers/authControllers/signupController");
const forgetController = require("../controllers/authControllers/forgetController");
const loginController = require("../controllers/authControllers/loginController");
const router = express.Router();

const signupValidations = [
    UserNameValidator(),
    EmailValidator(),
    PasswordValidator()
]

const loginValidations = [
    EmailValidator(),
    PasswordValidator()
]

router.post("/signup", runValidation(signupValidations), signupController)
router.post("/forgotpassword", EmailValidator(), forgetController)
router.post("/login", runValidation(loginValidations), loginController)

module.exports = router