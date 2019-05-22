const express = require('express')
const router = express.Router()
const {checkNotLogin} = require('../middlewares/check')

router.post('/', checkNotLogin, (req, res, next) => {
    res.send('登录')
})

router.get('/', checkNotLogin, (req, res, next) => {
    res.send('登录页')
})

module.exports = router