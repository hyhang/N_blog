const express = require('express')
const router = express.Router()
const {checkLogin} = require('../middlewares/check')

router.get('/', checkLogin, (req, res, next) => {
    //清空session中保存的用户信息
    req.session.user = null
    req.flash('success', '登出成功')
    //转回主页
    res.redirect('/posts')
})

module.exports = router