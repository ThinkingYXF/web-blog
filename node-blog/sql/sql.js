const Sql = {
  getUserInfoByName(username) {
    return `select * from user_user where username="${username}";`
  },
  getUserInfoById(userId) {
    return `select * from user_user where id="${userId}";`
  },
}

module.exports = Sql