const express = require('express');
const router = require('./routes/authRoute');
const summaryRouter = require('./routes/summaryRoute');
const AIRouter = require('./routes/AIRoute');

const flow = express();

flow.use("/auth", router)
flow.use("/summary", summaryRouter)
flow.use("/texttoimage",AIRouter)

module.exports = flow