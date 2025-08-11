
const logoutController = async (req, res) => {

    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    });

    res.status(200).json({ message: "Logged out successfully" });

};

module.exports = logoutController;
