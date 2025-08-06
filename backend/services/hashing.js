const { genSalt, hash, compare } = require('bcrypt');

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

const DecryptHashing = async (password, hashed) => {
    try {
        const compared = await compare(password, hashed)
        return compared
    } catch (err) {
        console.log(err)
        throw err
    }
}

module.exports = {
    Hashing,
    DecryptHashing
}