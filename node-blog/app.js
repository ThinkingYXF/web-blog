const Koa = require("koa")
const app = new Koa()
const config = require("./config.json")
const fs = require("fs")
const bodyParser = require('koa-bodyparser')
const Router = require("koa-router")
let router = new Router()

//接口分模块
let urls = fs.readdirSync('./interface')
urls.forEach((element) => {
  //interface里的js接口文件
  let module = require('./interface/' + element)
  router.use('', module.routes())
})
//解析post请求参数
app.use(bodyParser())
//使用路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(config.interfacePort)