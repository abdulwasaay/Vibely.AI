const mongoose = require('mongoose');

const mongoConnection = async (url) => {
    try {
        await mongoose.connect(url);
        console.log(`✅ MongoDB Connected: ${url}`);
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err.message);
    }
};

module.exports = mongoConnection;