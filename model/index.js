const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/realworld', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', err => console.log(`MongoDB 数据库连接失败 ${err}`))

db.once('open', () => console.log('MongoDB 数据库连接成功'))

module.exports = {
  User: mongoose.model('User', require('./user'))
}