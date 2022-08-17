require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./database/database');

const port = process.env.PORT ?? 3001;
const app = express();

connectToDatabase();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});