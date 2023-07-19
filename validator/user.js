const { body } = require("express-validator");
const validate = require("../middlewares/validate");
const { User } = require('../model')
const md5 = require('../util/md5')
exports.register = validate([
  body('user.username').notEmpty(),
  body('user.password').notEmpty(),
  body('user.email')
    .notEmpty()
    .isEmail()
    .bail()
    .custom(async email => {
      const user = await User.findOne({ email })
      if (user) {
        return Promise.reject('邮箱已经存在')
      }
    })
])

exports.login = [
  // 先逻辑验证
  validate([
    body('user.email').notEmpty().withMessage('邮箱不能为空'),
    body('user.password').notEmpty().withMessage('登录密码不能为空')
  ]),
  // 再业务验证
  validate([
    body('user.email')
      .custom(async (email, { req })  => {
        const user = await User.findOne({email}).select('password')
        if (!user) {
          return Promise.reject('用户不存在')
        }
        req.user = user
      })
  ]),
  validate([
    body('user.password')
      .custom(async (password, { req }) => {
        console.log(md5(password));
        if (md5(password) !== req.user.password) {
          return Promise.reject('密码不正确')
        }
      })
  ])

]