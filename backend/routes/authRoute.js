const express = require("express");
const { UserNameValidator, EmailValidator, PasswordValidator, userIdValidator } = require("../services/validators/UserFieldsValidator");
const runValidation = require("../services/Validate");
const signupController = require("../controllers/authControllers/signupController");
const forgetController = require("../controllers/authControllers/forgetController");
const loginController = require("../controllers/authControllers/loginController");
const resetTokenVerification = require("../middlewares/resetMiddleware");
const resetController = require("../controllers/authControllers/resetController");
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

const resetValidations = [
    userIdValidator(),
    PasswordValidator()
]

router.post("/signup", runValidation(signupValidations), signupController)
router.post("/forgotpassword", EmailValidator(), forgetController)
router.post("/login", runValidation(loginValidations), loginController)
router.post("/resetpassword", runValidation(resetValidations), resetTokenVerification, resetController)

module.exports = router