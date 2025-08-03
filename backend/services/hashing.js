const { genSalt, hash } = require('bcrypt');

const Hashing = async (password) => {
    try {
        const saltRounds = 10;
        const salt = await genSalt(saltRounds);
        const hashed = await hash(password, salt);
        return hashed;
    } catch (err) {
        console.log(err)
        throw err
    }
}

module.exports = {
    Hashing
}