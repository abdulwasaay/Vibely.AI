import { object, string } from 'yup';
import * as EmailValidator from 'email-validator';

const loginSchema = object({
    userIdorMail: string().required("Email or User ID required!").test("emailTest", function (value) {
        if (value && value.includes("@")) {
            const emailValidate = EmailValidator.validate(value);
            if (!emailValidate) {
                return this.createError({ message: "Invalid email format" });
            }
        } else if (value) {
            const userIdRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/;
            if (!userIdRegex.test(value)) {
                return this.createError({ message: "User ID contains numbers and alphabets" });
            }
        }
        return true;
    }),
    password: string().required("Password is required!")
});

export default loginSchema