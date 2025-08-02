const express = require('express');
const { port, mongodb_url, mongodb_name } = require('./config/env');
const { corsOptions } = require('./config/corsOptions');
const cors = require('cors');
const mongoConnection = require('./services/mongoConnection');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoConnection(mongodb_url, mongodb_name).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) => {
  console.log(err)
})
