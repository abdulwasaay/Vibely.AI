import { object, string, number, date, InferType } from 'yup';

const loginSchema = object({
    userIdorMail: string().required("Email or User ID required!").test("emailTest", function (value) {
        if (value && value.includes("@")) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                return this.createError({ message: "Invalid email format" });
            }
        } else if (value) {
            const userIdRegex = /^[a-zA-Z0-9]+$/;
            if (!userIdRegex.test(value)) {
                return this.createError({ message: "User ID contains numbers and alphabets" });
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

export default loginSchema