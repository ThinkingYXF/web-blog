const Router = require("koa-router")
let loginRouter = new Router()
let MessageDTO = require("../class/Message");         //消息DTO
const mysql_str = require("../sql/sql")               //sql语句
const Common = require("../common/sql_option")        //公共方法
let jwt = require("../common/jwt")


/**
 * 登录
 * @params username 用户名
 * @params password 密码
 */
loginRouter.post("/login", async ctx => {
  let message = new MessageDTO()
  let req = ctx.request.body
  let res = await Common.sql_query(mysql_str.getUserInfoByName(req.username), true)
  if (res.password == req.password) {
    //创建token
    jwt.createToken(res, ctx)
    //返回数据
    var result = {
      userId: res.id,
      username: res.username,
      createTime: res.createTime
    }
    message.setResult(result)
  } else {
    message.setFalseMsg(500, "账号或密码错误")
  }
  ctx.body = message
})

module.exports = loginRouter