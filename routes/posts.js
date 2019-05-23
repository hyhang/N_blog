const express = require('express')
const router = express.Router()

const PostModel = require('../models/posts')

const {checkLogin} = require('../middlewares/check')

router.get('/', (req, res, next) => {
    res.render('posts')
})

router.post('/create', checkLogin, (req, res, next) => {
    const author = req.session.user._id
    const title = req.fields.title
    const content = req.fields.content

    //校验参数
    try {
        if (!title.length) {
            throw new Error('请填写标题')
        }
        if (!content.length) {
            throw new Error('请填写内容')
        }
    } catch(err) {
        req.flash('error', error.message)
        return res.redirect('back')
    }

    let post = {
        author,
        title,
        content
    }

    PostModel.create(post)
        .then( (data) => {
            post = data.ops[0]
            // console.log(data)
            req.flash('success', '发表成功')
            res.redirect(`/posts/${post._id}`)
        })
        .catch(next)
})

router.get('/create', checkLogin, (req, res, next) => {
    res.render('create')
})

router.get('/:postId', (req, res, next) => {
    res.send('文章页详情')
})

router.get('/:postId/edit', checkLogin, (req, res, next) => {
    res.send('更新文章页')
})

router.post('/:postId/edit', checkLogin, (req, res, next) => {
    res.send('更新文章')
})

router.get('/:postId/remove', checkLogin, (req, res, next) => {
    res.send('删除文章')
})

module.exports = router