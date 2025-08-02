const { corsOptions } = require('./corsOptions');

require('dotenv').config()

const port = process.env.PORT;
const origin = process.env.ORIGIN;

module.exports = {
    port,
    origin,
    corsOptions
}