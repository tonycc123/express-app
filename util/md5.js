const crypto = require('crypto')

module.exports = str => {
  return crypto.createHash('md5')
    .update('express' + str)
    .digest('hex')
}