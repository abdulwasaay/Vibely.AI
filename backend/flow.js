const express = require('express');
const router = require('./routes/authRoute');
const summaryRouter = require('./routes/summaryRoute');

const flow = express();

flow.use("/auth", router)
flow.use("/summary", summaryRouter)

module.exports = flow