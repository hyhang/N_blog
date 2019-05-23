const {Post} = require('../lib/mongo')

module.exports = {
    create : (post) => {
        return Post.create(post).exec()
    }
}