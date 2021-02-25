//接口返回参数
class MessageDTO {
  constructor() {
    this.code = 200
    this.message = null
    this.result = null
  }
  //设置result
  setResult(result) {
    this.result = result
    return this
  }
  //设置成功的msg
  setTrueMsg(msg) {
    this.code = 200;
    this.message = msg
  }
  //设置失败的code与msg
  setFalseMsg(code, msg) {
    this.code = code || 500
    this.message = msg
    this.result = null
  }
  //设置失败的code与msg组
  setFalseMsgs(code, msg) {
    this.code = code || 500
    this.errMessages = msg
    this.result = null
  }
}
module.exports = MessageDTO