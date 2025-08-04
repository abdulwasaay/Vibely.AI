const jwt = require('jsonwebtoken');

const createToken = (allData, expiry, secret) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ data: allData }, secret, { expiresIn: expiry }, (err, token) => {
            if (err) reject(err);
            else resolve(token);
        });
    })
}

module.exports = {
    createToken
}