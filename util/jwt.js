const jwt = require('jsonwebtoken');
const { promisify } = require('util')
// 生成 jwt
exports.sign = promisify(jwt.sign)
exports.verify = promisify(jwt.verify)
exports.decode = promisify(jwt.decode0)