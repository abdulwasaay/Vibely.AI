const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    emailStatus: { type: Boolean, required: true }
})

const user = mongoose.model('User', userSchema);

module.exports = user