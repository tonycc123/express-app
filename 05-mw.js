const express = require('express');
const { logger } = require('./middlewares/logger');
const cors = require('cors');
const app = express();

app.use(logger)
app.use(cors())
app.get('/', (req, res) => res.send('get /'))
app.get('/about', (req, res) => res.send('get /about'))
app.post('/login', (req, res) => res.send('post /login'))


app.listen(3000, () => {
  console.log('server running at port 3000')
})