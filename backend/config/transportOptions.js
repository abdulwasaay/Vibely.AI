const { my_email, app_pass } = require("./env")

const transPortOptions = {
    service: 'gmail',
    auth: {
        user: my_email,
        pass: app_pass
    }
}

module.exports = transPortOptions