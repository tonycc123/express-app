const express = require('express');
const router = require('./router');
const errorHandler = require('./middlewares/error-handler')
require('./model')
const app = express();

app.use(express.json());
app.use(express.urlencoded())
app.use('/api', router)

app.use(errorHandler())

app.listen(3000, () => console.log('server running at port 3000'))