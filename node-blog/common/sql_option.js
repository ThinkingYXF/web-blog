const config = require("../config.json")
let mysql = require("mysql")
//mysql
var connection = mysql.createConnection(config.mysql_config)
connection.connect()


const Common = {
  /**
   * 统一sql查询方法封装
   * @param sql         sql语句
   * @param single      结果是否是单条数据
   */
  sql_query(sql, single) {
    return new Promise((resolve, reject) => {
      connection.query(sql, function (err, results) {
        if (err) {
          reject(err)
          return
        }
        if (single) {
          if (results.length) resolve(results[0])
          else resolve({})
        } else if (results && results.length) {
          resolve(results)
        } else {
          resolve([])
        }
      })
    });
  },
}

module.exports = Common;