const user = require("../../models/UserSchema");
const path = require('path');
const ejs = require('ejs');
const { createToken } = require("../../services/tokenHandling");
const { my_email, forgot_secret, origins } = require("../../config/env");
const sendMail = require("../../services/mailSender");

const forgetController = async (req, res) => {
    const { email } = req.body;
    try {
        const users = await user.findOne({ email });
        if (!users) return res.status(400).send({ message: "User not found!" });
        const templatePath = path.join(__dirname, "../../views/forgotPassword.ejs")
        const tokenExpiry = '15m'
        const resetToken = await createToken(
            {
                userName: users.userName,
                email,
                token: true
            },
            tokenExpiry,
            forgot_secret
        );
        const resetLink = `${origins}/reset-password/${users._id}/${resetToken}`;

        const emailHTML = await ejs.renderFile(templatePath, {
            userName: users.userName || 'User',
            resetLink
        });

        const mailOptions = {
            from: `"Vibely.AI" <${my_email}>`,
            to: email,
            subject: "Reset Your Password",
            html: emailHTML
        }

        const sent = await sendMail(mailOptions);
        if (!sent) return res.status(400).send({ message: "Email not Sent. Try again Later!" });
        return res.status(200).send({ message: "Email sent successfully!" });

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Something went wrong!" });
    }
}

module.exports = forgetController