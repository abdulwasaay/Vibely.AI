const express = require('express');
const router = require('./routes/authRoute');

const flow = express();

flow.use("/auth", router)

module.exports = flow