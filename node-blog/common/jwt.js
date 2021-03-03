const expireTime = "30m"              //默认30mins 过期
const secret = "qwer"                 //盐
const jwt = require("jsonwebtoken")
const JWT = {
  //创建token
  createToken(userInfo, ctx) {
    let u = { userId: userInfo.id, username: userInfo.username }
    let token = jwt.sign(u, secret, { expiresIn: expireTime })
    ctx.append("x-jwt-token", token)
  },
  //校验token
  checkToken(token) {
    return new Promise((resolve, reject) => {
      if (token) {
        token = token.split(" ")[1]
      } else {
        resolve(null)
        return
      }
      jwt.verify(token, secret, function (err, info) {
        if (err) {
          reject(err)
        } else {
          resolve(info)
        }
      })
    })
  },
  //刷新token
  refreshToken(userInfo, ctx) {
    let u = { userId: userInfo.userId, username: userInfo.username }
    let t = jwt.sign(u, secret, { expiresIn: expireTime })
    ctx.append("x-jwt-token", t)
  }
}
module.exports = JWT