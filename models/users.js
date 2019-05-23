const {User} = require('../lib/mongo')

module.exports = {
    //注册用户
    create : (user) => {
        return User.create(user).exec()
    },
    //通过用户名获取用户信息
    getUserByName : (name) => {
        return User
            .findOne({ name : name })
            .addCreatedAt()  //自定义 mongolass 插件通过_id生成时间戳（见mongo.js）
            .exec()
    }
}