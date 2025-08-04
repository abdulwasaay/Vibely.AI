const nodemailer = require('nodemailer');
const transPortOptions = require("../config/transportOptions");

const sendMail = async (mailOptions) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport(transPortOptions);
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
                reject(false)
            } else {
                console.log(info)
                resolve(true)
            }
        })
    })
}

module.exports = sendMail