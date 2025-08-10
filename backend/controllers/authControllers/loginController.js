const { login_secret, refresh_secret } = require("../../config/env");
const user = require("../../models/UserSchema");
const { DecryptHashing } = require("../../services/hashing");
const { createToken } = require("../../services/tokenHandling");

const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const users = await user.findOne({ email });
        if (!users) {
            return res.status(400).send({ message: "User not found!" });
        }
        const passwordMatched = await DecryptHashing(password, users.password);
        if (!passwordMatched) {
            return res.status(400).send({ message: "Incorrect Password!" });
        }
        const authTokenData = {
            userName: users.userName,
            email: users.email
        };
        const authToken = await createToken(authTokenData, "15m", login_secret);
        const refreshTokenData = {
            userId: users._id,
        }
        const refreshTokenToken = await createToken(refreshTokenData, "48h", refresh_secret);

        const refreshCookieExpiry = new Date(Date.now() + 48 * 60 * 60 * 1000);

        res.cookie("refreshToken", refreshTokenToken, {
            expires: refreshCookieExpiry,
            httpOnly: true,
            secure: true
        })

        res.status(200).send({
            message:"Login Successfull",
            data: {
                token: authToken,
                users: {
                    userName: users.userName,
                    email: users.email,
                    id:users._id
                }
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Something went wrong!" });
    }
}

module.exports = loginController