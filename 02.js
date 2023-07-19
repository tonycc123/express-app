const express = require('express');
const app = express();

// 解析表单数据 application/json
app.use(express.json());
// 解析表单数据 application/x-www-form-urlencoded
app.use(express.urlencoded());
// get
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Got a post request')
})

app.put('/user/:userId', (req, res) => {
  console.log(req.query)
  console.log(req.params)
  res.send('user put req')
})

app.delete('/user', (req, res) => {
  res.send('user delete req')
})

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
})