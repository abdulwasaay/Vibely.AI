const user = require("../../models/UserSchema");
const path = require('path');
const ejs = require('ejs');

const forgetController = async (req, res) => {
    const { email } = req.body;
    try {
        const users = await user.findOne({ email });
        if (!users) res.status(400).send({ message: "User not found!" });
        const templatePath = path.join(__dirname, "../views/forgotPassword.ejs")
        const resetLink = `${origins}/reset-password/`;
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Something went wrong!" });
    }
}

module.exports = forgetController