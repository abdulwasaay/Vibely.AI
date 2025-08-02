const mongoose = require('mongoose');

const mongoConnection = async (url, dbName) => {
    try {
        await mongoose.connect(`${url}/${dbName}`);
        console.log(`✅ MongoDB Connected: ${dbName}`);
        return "MongoDB Connected"
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err.message);
        return "MongoDB failed"
        process.exit(1); // Exit process with failure
    }
};

module.exports = mongoConnection;