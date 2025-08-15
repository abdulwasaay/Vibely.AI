const user = require("../models/UserSchema");

const summaryController = async (req, res) => {
    const { email } = req.user;
    try {
        const getOne = await user.findOne({ email });
        const summaryData = {
            userName: getOne?.userName,
            email: getOne?.email,
            status: getOne?.emailStatus,
            credits: getOne?.credits
        }
        res.status(200).send(summaryData);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Something went wrong!" });
    }
}

module.exports = summaryController