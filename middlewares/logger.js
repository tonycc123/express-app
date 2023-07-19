const logger = (req, res, next) => {
  res.setHeader('MyHeader', 'I am a gay')
  console.log(req.method);
  console.log(req.url)
  next();
}

module.exports = {
  logger
}