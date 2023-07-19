const { sign } = require("jsonwebtoken");
const { User } = require("../model")

// 用户注册
exports.register = async (req, res, next) => {
  try {
    let user = new User(req.body.user);
    await user.save();
    user = user.toJSON();
    delete user.password
    res.status(200)
      .json({user})
  } catch(err) {
    next(err)
  }
}

// 用户登录
exports.login = async (req, res, next) => {
  const user = req.user.toJSON();
  const token = await sign({
    userId: user._id
  }, 'express-app', {
    expiresIn: 30
  })
  delete user.password
  console.log(token)
  // sign()
  res.status(200).json({
    ...user,
    token
  })

  next();
}

exports.getUserInfo = async (req, res, next) => {
  try {
    res.status(200).json(req.user)
  } catch (error) {
    next(error)
  }
}