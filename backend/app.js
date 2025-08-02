const express = require('express');
const { port, corsOptions } = require('./config/env');
const cors = require('cors');
const app = express();
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
