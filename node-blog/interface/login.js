const Router = require("koa-router")
let loginRouter = new Router()
let MessageDTO = require("../class/Message");

/**
 * 登录
 * @params username 用户名
 * @params password 密码
 */
loginRouter.post("/login", ctx => {
  let message = new MessageDTO()
  let req = ctx.request.body;
  if (req.username == "admin" && req.password == "123456") {
    var result = {
      userId: 1000,
      username: req.username,
      loginDate: new Date().getTime()
    }
    message.setResult(result);
  } else {
    message.setFalseMsg(500, "账号或密码错误");
  }
  ctx.body = message
})


module.exports = loginRouter