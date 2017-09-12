/**
 * 三种方式接受用户请求
 * server.get()
 * server.post()
 * server.use() // get post请求通吃
 * 
 * 解析数据
 * get: req.query 解析参数 req.query['user']
 * post: body-parser,
 *  使用：server.use(bodyParser.urulencoded(extended: true, limit: 1024 * 1024)) // 扩展模式和限制大小
 *  输出：req.body: // 最后解析到的数据在body里
 *  body parser 的实现；监听data,end，最后querystring.parse接受到的数据
 *    封装my-body-parser ： 导出一个function，引入，使用
 * 
 * express 插件：
 * express-static：静态资源服务器中间件
 */
const express = require('express');
const server = express()
// use 方法，两个参数，路径和回调;
server.use('/a', (req, res) => {
  console.log(req.query['user']) // http://localhost:8888/a?user=zhangsan
  res.send({a: 12, b: 23})
  res.end()
})
server.listen(8888);