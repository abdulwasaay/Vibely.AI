const express = require('express');
const { port, mongodb_url, mongodb_name } = require('./config/env');
const { corsOptions } = require('./config/corsOptions');
const cors = require('cors');
const mongoConnection = require('./services/mongoConnection');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(cors(corsOptions));

mongoConnection(mongodb_url , mongodb_name)

app.get('/', (req, res) => {
  res.send('Hello World!' + mongoose.connection.readyState);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
