//处理 multipart/form-data 类型文件
const multer = require('koa-multer')

let storage = multer.diskStorage({
    //文件保存路径 这个路由是以项目文件夹 也就是和入口文件（如app.js同一个层级的）
    destination: function (req, file, cb) {
        cb(null, 'static/uploads/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        // let fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
        // cb(null, 'file' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
        cb(null, file.originalname);
    }
})

let upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 // 限制1MB  
    }
});

module.exports = upload