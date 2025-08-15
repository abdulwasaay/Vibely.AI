const { login_secret } = require("../config/env");
const { verifyToken } = require("../services/tokenHandling");

const tokenAuthentication = async (req, res, next) => {
    const accessToken = req.headers.authorization.split(' ')[1];
    if (!accessToken) {
        return res.status(401).send({ message: "Un Authenticated!" })
    } try {
        const authenticated = await verifyToken(accessToken, login_secret);
        if (!authenticated) return res.status(401).send({ message: "Un Authenticated!" })
        req.user = authenticated?.data
        next()
    } catch (err) {
        console.log(err)
        res.status(401).send({ message: "Un Authenticated!" })
    }
}

module.exports = tokenAuthentication