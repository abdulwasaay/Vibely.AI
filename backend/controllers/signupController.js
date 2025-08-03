const user = require("../models/UserSchema");
const { Hashing } = require("../services/hashing");

async function signupController (req, res){
    const { email, userName, password } = req.body;
    try {
        const users = await user.findOne({ email });
        const username = await user.findOne({ userName });
        if (users) {
            return res.status(400).send({ message: "User already exists!" });
        }
        if (username) {
            return res.status(400).send({ message: "Username already exists!" });
        }
        const hashedPassword = await Hashing(password)  
        await user.create({
            userName,
            email,
            password: hashedPassword
        })
        return res.status(200).send({ message: "User Registered Successfully" });

    } catch (err) {
        console.log(err)
    }
}

module.exports = signupController