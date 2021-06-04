const Router = require("koa-router")
let userRouter = new Router()
let MessageDTO = require("../class/Message");     //消息DTO
const mysql_str = require("../sql/sql")           //sql语句
const Common = require("../common/sql_option")          //公共方法
let jwt = require("../common/jwt")


/**
 * 查询登录人信息
 * @params username 用户名
 * @params password 密码
 */
userRouter.get("/userInfo", async ctx => {
  let message = new MessageDTO()
  let userInfo = null
  try {
    userInfo = await jwt.checkToken(ctx.request.header.authorization)
    if (userInfo === null) {
      message.setUnLogin()
      ctx.body = message;
    } else {
      jwt.refreshToken(userInfo, ctx)
      let res = await Common.sql_query(mysql_str.getUserInfoById(userInfo.userId), true)
      var result = {
        userId: res.id,
        username: res.username,
        createTime: res.createTime
      }
      message.setResult(result)
      ctx.body = message
    }
  } catch (e) {
    console.log("error: ", e)
    message.setFalseMsg(500, e.message);
    ctx.body = message;
  }
})

module.exports = userRouter