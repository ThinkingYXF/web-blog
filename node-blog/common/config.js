//不需要校验的路由
const noAuthList = [
  "/login"
]
//需要校验的路由
const authList = [
  "/userInfo"
]

module.exports = {
  noAuthList,
  authList
}