const Router = require("koa-router")
let router = new Router()
let MessageDTO = require("../class/Message");     //消息DTO
const { authList } = require("./config")
let jwt = require("./jwt")

let MiddleWare = {
  $post(url) {
    router.post(url, async (ctx, next) => {
      let message = new MessageDTO()
      let userInfo = null
      if (authList.includes(ctx.url)) {
        try {
          userInfo = await jwt.checkToken(ctx.request.header.authorization)
          if (userInfo === null) {
            message.setUnLogin()
            ctx.body = message
          } else {
            next()
          }
        } catch (e) {
          message.setUnLogin()
          ctx.body = message
        }
      }
    })
    return router
  },
  $get(url) {
    router.get(url, async (ctx, next) => {
      let message = new MessageDTO()
      let userInfo = null
      if (authList.includes(ctx.url)) {
        try {
          userInfo = await jwt.checkToken(ctx.request.header.authorization)
          if (userInfo === null) {
            message.setUnLogin()
            ctx.body = message
          } else {
            next()
          }
        } catch (e) {
          message.setUnLogin()
          ctx.body = message
        }
      }
    })
    return router
  }
}

module.exports = MiddleWare