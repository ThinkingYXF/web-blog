const Router = require("koa-router")
let userRouter = new Router()
let MessageDTO = require("../class/Message"); //消息DTO
const mysql_str = require("../sql/sql")     //sql语句
const Common = require("../util")             //公共方法


/**
 * 查询登录人信息
 * @params username 用户名
 * @params password 密码
 */
userRouter.get("/userInfo", async ctx => {
  let message = new MessageDTO()
  let res = await Common.sql_query(mysql_str.getUserInfoById(1000), true)
  var result = {
    userId: res.id,
    username: res.username,
    createTime: res.createTime
  }
  message.setResult(result)
  ctx.body = message
})

module.exports = userRouter