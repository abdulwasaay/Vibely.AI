const express = require('express');
const { port, mongodb_url, mongodb_name } = require('./config/env');
const { corsOptions } = require('./config/corsOptions');
const cors = require('cors');
const mongoConnection = require('./services/mongoConnection');
const app = express();
app.use(cors(corsOptions));

app.get('/', async(req, res) => {
  const gettt = await mongoConnection(mongodb_url , mongodb_name)
  res.send(gettt);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
