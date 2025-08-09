const { origins } = require("./env")

const corsOptions = {
    origin: origins,
    credentials: true,  
}

module.exports = {
    corsOptions
}