const express = require('express');
const { port, mongodb_url } = require('./config/env');
const { corsOptions } = require('./config/corsOptions');
const cors = require('cors');
const mongoConnection = require('./services/mongoConnection');
const flow = require('./flow');
const app = express();

app.use(express.json())
app.use(cors(corsOptions));

mongoConnection(mongodb_url)

app.use("/api", flow)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
