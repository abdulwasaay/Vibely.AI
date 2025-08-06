const jwt = require('jsonwebtoken');

const createToken = (allData, expiry, secret) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ data: allData }, secret, { expiresIn: expiry }, (err, token) => {
            if (err) reject(err);
            else resolve(token);
        });
    })
}

// const verifyToken = (token, expiry, secret) => {
//     return new Promise((resolve, reject) => {
//         // jwt.sign({ data: allData }, secret, { expiresIn: expiry }, (err, token) => {
//         //     if (err) reject(err);
//         //     else resolve(token);
//         // });
//         jwt.verify(token, secret)
//     })
// }

module.exports = {
    createToken
}