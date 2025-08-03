const mongoose = require('mongoose');

const mongoConnection = async (url) => {
    try {
        await mongoose.connect(url);
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err);
    }
};

module.exports = mongoConnection;