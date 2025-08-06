const { forgot_secret } = require("../config/env");
const { verifyToken } = require("../services/tokenHandling");

const resetTokenVerification = async (req, res, next) => {
    const resetToken = req.headers.authorization.split(' ')[1];
    if (!resetToken) {
        return res.status(401).send({ message: "Reset link is missing. Please request a new one." })
    } try {
        await verifyToken(resetToken, forgot_secret);
        next()
    } catch (err) {
        console.log(err)
        res.status(401).send({ message: "Invalid reset link. Please request a new one." });
    }
}

module.exports = resetTokenVerification