const express = require('express');
const { port, mongodb_url, mongodb_name } = require('./config/env');
const { corsOptions } = require('./config/corsOptions');
const cors = require('cors');
const mongoConnection = require('./services/mongoConnection');
const users = require('./models/user');
const app = express();
app.use(cors(corsOptions));
mongoConnection(mongodb_url, mongodb_name)

app.get('/', async (req, res) => {
  try {
    const getName = await users.create({
      name: "waay"
    });
    console.log("✅ Inserted:", getName);
    res.send('Hello World!');
  } catch (err) {
    console.error("❌ Insert Error:", err.message);
    res.status(500).send("Insert Failed");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
