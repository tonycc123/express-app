/**
 * express 渲染动态网页
 */

const express = require('express')

const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1>hello world</h1>')
})

app.listen(3000, () => {})