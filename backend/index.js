const connect = require('./db');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

connect();
const app = express()
const port = 3001;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/api', require('./routes/user'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})