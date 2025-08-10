import { object, string } from 'yup';
import * as EmailValidator from 'email-validator';

const loginSchema = object({
    email: string().required("Email is required!").test("emailTest", function (value) {
        if (value) {
            const emailValidate = EmailValidator.validate(value);
            if (!emailValidate) {
                return this.createError({ message: "Invalid email format" });
            }
        }
        return true;
    }),
    password: string().required("Password is required!")
});

export default loginSchema