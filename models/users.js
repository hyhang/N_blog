const {User} = require('../lib/mongo')

module.exports = {
    create : (user) => {
        return User.create(user).exec()
    }
}