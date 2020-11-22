import express from 'express'
import 'dotenv/config.js';
import userRouter from './routers/userrouter.js'

const app = express();
const port = 9000;

app.use('/api', userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Fantom listening on port ${port}!`)
});