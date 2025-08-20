const { body } = require("express-validator");

const EmailValidator = () => body("email")
    .notEmpty().withMessage("Email is Required")
    .bail()
    .isEmail().withMessage("Invalid Email")
    .bail();

const UserNameValidator = () => body("userName")
    .notEmpty().withMessage("Username is Required")
    .bail()
    .matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/).withMessage("User ID contains numbers and alphabets")
    .bail()

const PasswordValidator = () => body("password")
    .notEmpty().withMessage("Password is Required")
    .bail()
    .isLength({ min: 8 }).withMessage("Password must be strong")
    .bail()
    .isStrongPassword().withMessage("Password must be strong")
    .bail()

const userIdValidator = () => body("userId")
    .notEmpty().withMessage("User Id Required")
    .bail()

const promptValidator = () => body("prompt")
    .notEmpty().withMessage("Prompt is Required")
    .bail()

module.exports = {
    EmailValidator,
    UserNameValidator,
    PasswordValidator,
    userIdValidator,
    promptValidator
}