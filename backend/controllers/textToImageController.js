const user = require("../models/UserSchema");
const GenerateImage = require("../services/thirdPartyApis/GetIdAIGenerator");

const textToImageController = async (req, res) => {
    const { prompt } = req.body;
    const { email } = req.user;
    try {
        const getUser = await user.findOne({ email });
        if (!getUser) return res.status(400).send({ message: "User not found!" });
        if (getUser?.credits <= 0) return res.status(400).send({ message: "Not enough credits!" });
        const getImg = await GenerateImage(prompt);
        const buffer = Buffer.from(await getImg.arrayBuffer());
        const base64 = buffer.toString("base64")
        if (base64) {
            const newCreds = getUser.credits - 1
            const updateUser = await user.findOneAndUpdate(
                { email },
                { $set: { credits: newCreds } }, // $set use karna best practice hai
                { new: true } // updated document return karega
            );
            return res.status(200).send({ img: `data:image/jpeg;base64,${base64}`, credits: updateUser.credits })
        }
        res.status(500).send({ message: "Image not generated Successfully!" })

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Something went wrong!" });
    }
}

module.exports = textToImageController