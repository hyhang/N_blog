const { Post } = require("../lib/mongo");
const marked = require("marked");

//将 post的 content从 markdown转换成 html
Post.plugin("contentToHtml", {
  afterFind: function(posts) {
    return posts.map(post => {
      post.content = marked(post.content);
      return post;
    });
  },
  afterFindOne: function(post) {
    if (post) {
      post.content = marked(post.content);
    }
    return post;
  }
});

module.exports = {
  //创建一篇文章
  create: post => {
    return Post.create(post).exec();
  },

  //通过文章id获取一篇文章
  getPostById: postId => {
    return Post.findOne({ _id: postId })
      .populate({ path: "author", model: "User" })
      .addCreatedAt()
      .contentToHtml()
      .exec();
  },

  //按创建时间降序获取所有用户文章或者某个特定用户的所有文章
  getPosts: author => {
    const query = {};
    if (author) {
      query.author = author;
    }
    return Post.find(query)
      .populate({ path: "author", model: "User" })
      .sort({ _id: -1 })
      .addCreatedAt()
      .contentToHtml()
      .exec();
  },

  //通过 id给 pv加1
  incPv: postId => {
    return Post.update({ _id: postId }, { $inc: { pv: 1 } }).exec();
  },

  // 通过文章 id 获取一篇原生文章（编辑文章）
  getRawPostById: function getRawPostById(postId) {
    return Post.findOne({ _id: postId })
      .populate({ path: "author", model: "User" })
      .exec();
  },

  // 通过文章 id 更新一篇文章
  updatePostById: function updatePostById(postId, data) {
    return Post.update({ _id: postId }, { $set: data }).exec();
  },

  // 通过文章 id 删除一篇文章
  delPostById: function delPostById(postId) {
    return Post.deleteOne({ _id: postId }).exec();
  }
};
