# Node.js博客 #

一个基于node.js的极简博客。麻雀虽小，五脏俱全。兼具登录、注册、发表文章、修改文章、删除文章等功能。

主要技术：Node.js + express + mongodb + ejs

## 运行 ##

在执行项目前先确保mongodb服务器已经运行在本地27017端口，然后进入项目文件夹后，执行：

```
npm install

node index
```

项目将会运行在：http://localhost:3000

## 目录结构 ##

config文件夹：存放项目的默认配置（项目运行端口号、数据库地址、session相关配置）

lib以及models文件夹：存放数据库模型以及自定义插件

middlewares文件夹：存放自定义ndoe中间件

routes文件夹：存放路由模块

views文件夹：存放模板文件

## 部分截图 ##

![注册](https://cdn.hyhblog.com.cn/github/5d90303457650cf74996fce3ea5c388.png)

![登录](https://cdn.hyhblog.com.cn/github/459e69dfc454b1677ab84e3d1a9a541.png)

![发表文章](https://cdn.hyhblog.com.cn/github/093a2960eda102c4928b274c2730102.png)

## 中间价 ##

项目中使用的中间价以及简介：

express: web 框架

express-session: session 中间件

connect-mongo: 将 session 存储于 mongodb，结合 express-session 使用

connect-flash: 页面通知的中间件，基于 session 实现

ejs: 模板引擎

express-formidable: 接收表单及文件上传的中间件

config-lite: 读取配置文件

marked: markdown 解析

moment: 时间格式化

mongolass: mongodb 驱动

objectid-to-timestamp: 根据 ObjectId 生成时间戳

sha1: sha1 加密，用于密码加密

winston: 日志

express-winston: express 的 winston 日志中间件

## 结语 ##

学习node是一个循序渐进的过程，通过该项目学习到了node的基础知识与应用。身为一个前端，能简单搭建node服务来mock一下数据，对

工作的帮助也是极大的。学技术，不怕的就是折腾~