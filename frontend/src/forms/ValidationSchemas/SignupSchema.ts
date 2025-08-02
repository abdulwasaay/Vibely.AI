import { object, string } from 'yup';
import * as EmailValidator from 'email-validator';

const signupSchema = object({
    userId: string().required("User ID required!").test("userIdTest", function (value) {
        if (value) {
            const userIdRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/;
            if (!userIdRegex.test(value)) {
                return this.createError({ message: "User ID contains numbers and alphabets" });
            }
        }
        return true;
    }),
    emailId: string().required("Email required!").test("emailTest", function (value) {
        if (value) {
            const emailValidate = EmailValidator.validate(value);
            if (!emailValidate){
                return this.createError({ message: "Invalid email format" });
            }
        }
        return true;
    }),
    password: string().required("Password is required!").test("passwordTest", function (value) {
        if (value) {
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
            if (!passwordRegex.test(value)) {
                return this.createError({ message: "Password must be strong" });
            }
        }
        return true
    })
});

export default signupSchema