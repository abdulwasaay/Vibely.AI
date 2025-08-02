import { object, string } from 'yup';
import * as EmailValidator from 'email-validator';

const forgotSchema = object({
    emailId: string().required("Email required!").test("emailTest", function (value) {
        if (value) {
            const emailValidate = EmailValidator.validate(value);
            if (!emailValidate){
                return this.createError({ message: "Invalid email format" });
            }
        }
        return true;
    })
});

export default forgotSchema