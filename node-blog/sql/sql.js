const Sql = {
  //查询用户信息
  getUserInfoByName(username) {
    return `select * from user_user where username="${username}";`
  },
  //查询用户信息
  getUserInfoById(userId) {
    return `select * from user_user where id="${userId}";`
  },
  //查询最新10条文章
  getArticleList(userId) {
    return `select * from articles where userId="${userId}" ORDER BY createTime DESC limit 10;`
  }
}

module.exports = Sql