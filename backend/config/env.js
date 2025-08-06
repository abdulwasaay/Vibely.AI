require('dotenv').config()

const port = process.env.PORT;
const origins = process.env.ORIGIN;
const env = process.env.ENV;
const mongodb_url = process.env.MONGO_URL;
const my_email = process.env.EMAIL;
const app_pass = process.env.APP_PASS;
const forgot_secret = process.env.FORGOT_SECRET_KEY;
const login_secret = process.env.LOGIN_SECRET_KEY;
const refresh_secret = process.env.REFRESH_SECRET_KEY

module.exports = {
    port,
    origins,
    env,
    mongodb_url,
    my_email,
    app_pass,
    forgot_secret,
    login_secret,
    refresh_secret
}