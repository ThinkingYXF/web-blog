const Router = require("koa-router")
let uploadRouter = new Router()
let MessageDTO = require("../class/Message");         //消息DTO
const mysql_str = require("../sql/sql")               //sql语句
const Common = require("../common/sql_option")        //公共方法
let jwt = require("../common/jwt")
const upload = require('../common/multer')  // 文件上传
let fs = require("fs")

//文件上传err 字典
const FILLERR = {
    'LIMIT_PART_COUNT': 'Too many parts',
    'LIMIT_FILE_SIZE': 'File too large',
    'LIMIT_FILE_COUNT': 'Too many files',
    'LIMIT_FIELD_KEY': 'Field name too long',
    'LIMIT_FIELD_VALUE': 'Field value too long',
    'LIMIT_FIELD_COUNT': 'Too many fields',
    'LIMIT_UNEXPECTED_FILE': 'Unexpected field'
}


/**
 * 单文件上传
 */
uploadRouter.post("/singleUpload", async (ctx, next) => {
    let message = new MessageDTO()
    let userInfo = null
    let fileErr = await upload.single('file')(ctx, next).then(res => res).catch(err => err);
    if (fileErr) {
        message.setFalseMsg(500, FILLERR[fileErr.code])
        ctx.body = message
    } else {
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
            message.setFalseMsg(500, e.message)
            ctx.body = message
        }
    }
})

/**
 * 多文件上传
 */
uploadRouter.post("/multiUpload", async (ctx, next) => {
    let message = new MessageDTO()
    let userInfo = null
    let fileErr = await upload.array('file', 1000)(ctx, next).then(res => res).catch(err => err)
    if (fileErr) {
        message.setFalseMsg(500, FILLERR[fileErr.code])
        ctx.body = message
    } else {
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
            message.setFalseMsg(500, e.message)
            ctx.body = message
        }
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
        message.setFalseMsg(500, e.message);
        ctx.body = message
    }
})

/**
 * 删除文件夹下文件
 */
uploadRouter.get("/deleteFile", async ctx => {
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
        message.setFalseMsg(500, e.message);
        ctx.body = message
    }
})

module.exports = uploadRouter