const Router = require("koa-router")
let uploadRouter = new Router()
let MessageDTO = require("../class/Message");         //消息DTO
const mysql_str = require("../sql/sql")               //sql语句
const Common = require("../common/sql_option")        //公共方法
let jwt = require("../common/jwt")
const upload = require('../common/multer')  // 文件上传
let fs = require("fs")


/**
 * 单文件上传
 */
uploadRouter.post("/singleUpload", upload.single('file'), async ctx => {
    let message = new MessageDTO()
    let userInfo = null
    try {
        userInfo = await jwt.checkToken(ctx.request.header.authorization)
        if (userInfo === null) {
            message.setUnLogin()
            ctx.body = message
        } else {
            jwt.refreshToken(userInfo, ctx)
            let file = ctx.req.file
            var result = {
                filename: file.filename,
            }
            message.setResult(result)
            ctx.body = message
        }
    } catch (e) {
        console.log("error: ", e)
        message.setUnLogin()
        ctx.body = message
    }
})

/**
 * 多文件上传
 */
uploadRouter.post("/multiUpload", upload.array('file', 1000), async ctx => {
    let message = new MessageDTO()
    let userInfo = null
    try {
        userInfo = await jwt.checkToken(ctx.request.header.authorization)
        if (userInfo === null) {
            message.setUnLogin()
            ctx.body = message
        } else {
            jwt.refreshToken(userInfo, ctx)
            let result = []
            if (ctx.req.files.length) {
                ctx.req.files.forEach(v => {
                    result.push({
                        filename: v.filename
                    })
                });
            }
            message.setResult(result)
            ctx.body = message
        }
    } catch (e) {
        console.log("error: ", e)
        message.setUnLogin()
        ctx.body = message
    }
})

/**
 * 获取文件夹下文件列表
 */
uploadRouter.get("/getResouces", async ctx => {
    let message = new MessageDTO()
    let userInfo = null
    try {
        userInfo = await jwt.checkToken(ctx.request.header.authorization)
        if (userInfo === null) {
            message.setUnLogin()
            ctx.body = message
        } else {
            jwt.refreshToken(userInfo, ctx)
            let result = []
            let files = fs.readdirSync("./static/uploads");
            files.forEach(v => {
                result.push(v);
            });
            message.setResult(result)
            ctx.body = message
        }
    } catch (e) {
        console.log("error: ", e)
        message.setUnLogin()
        ctx.body = message
    }
})

module.exports = uploadRouter