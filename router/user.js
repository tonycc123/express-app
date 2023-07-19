const express = require('express');
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middlewares/auth')
const router = express.Router();

const { body, validationResult } = require('express-validator');
const { User } = require('../model');
// 登录
router.post('/user/login', userValidator.login, userCtrl.login)

// 注册
router.post('/user', userValidator.register, (req, res, next) => { // 判断验证结果
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }
  next();
}, userCtrl.register)

// 获取用户信息
router.get('/user', auth, userCtrl.getUserInfo)

module.exports = router;