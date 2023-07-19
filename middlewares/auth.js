const { verify } = require("jsonwebtoken");
const { User } = require("../model");
module.exports = async (req, res, next) => {
  // 从请求头获取token 验证是否有效
  // 无效： 401
  // 有效：挂到req
  console.log(req.body)
  let token = req.headers['authorization']
  token = token ? token.split('Bearer ')[1] : null
  if (!token) {
    return res.status(401).end()
  }
  try {
    const decodedToken = await verify(token, 'express-app');
    const user = await User.findOne({_id: decodedToken.userId})
    req.user = user;
    next()
  } catch (error) {
    res.status(401).end()
  }
}