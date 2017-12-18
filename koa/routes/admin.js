const router = require('koa-router')()
const contrallers = require('./../app/contrallers/admin-user')

router.prefix('/admin/user')

// 登录用户
router.post('/login', function (ctx, next) {
  	ctx.body = contrallers.login(ctx, next);
})

// 注册用户
router.post('/signup', function (ctx, next) {
  	ctx.body = contrallers.signup(ctx, next);
})

// 忘记密码
router.post('/update', function (ctx, next) {
  	ctx.body = contrallers.update(ctx, next);
})

module.exports = router
