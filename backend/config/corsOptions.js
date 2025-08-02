const { origins } = require("./env")

const corsOptions = {
    origin: origins
}

module.exports = {
    corsOptions
}