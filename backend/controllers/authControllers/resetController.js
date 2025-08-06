const user = require("../../models/UserSchema");
const { Hashing } = require("../../services/hashing");

const resetController = async (req, res) => {
    const { password, userId } = req.body;
    const hashedPassword = await Hashing(password);
    try {
        await user.findByIdAndUpdate(userId, { $set: { password: hashedPassword } });
        res.status(200).send({ mes: "Password Changed Successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Something went wrong!" });
    }
}

module.exports = resetController