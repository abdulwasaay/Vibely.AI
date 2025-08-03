const express = require("express");
const signupController = require("../controllers/signupController");
const { UserNameValidator, EmailValidator, PasswordValidator } = require("../services/validators/UserFieldsValidator");

const router = express.Router();

const validations = [
    UserNameValidator(),
    EmailValidator(),
    PasswordValidator()
]
router.post("/signup", signupController)

module.exports = router