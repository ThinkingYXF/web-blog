const Router = require("koa-router")
let loginRouter = new Router()
let MessageDTO = require("../class/Message"); //消息DTO
const mysql_str = require("../sql/sql")     //sql语句
const Common = require("../util")             //公共方法


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