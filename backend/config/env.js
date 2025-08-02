require('dotenv').config()

const port = process.env.PORT;
const origins = process.env.ORIGIN;
const env = process.env.ENV;
const mongodb_url = process.env.MONGO_URL;
const mongodb_name = process.env.DB_NAME;

module.exports = {
    port,
    origins,
    env,
    mongodb_url,
    mongodb_name
}