import express from 'express'
import 'dotenv/config.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Fantom listening on port ${port}!`)
});