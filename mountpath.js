const express = require('express');

const app = express();
const admin = express();

admin.get('/', (req, res) => {
  console.log(admin.mountpath);
  res.send('Admin Homepage')
})

app.use('/admin', admin);

app.listen(3000, () => console.log('server running'))