/**
 * 系统模块
 * 自定义模块
 * 包管理器
 * 
 * crypto 加密
 * Events 事件
 * File System 文件
 * Stream 
 * HTTP
 * OS
 * path
 * Timer
 * ZLIB 压缩
 * 
 * 1. 模块有什么
  * require 请求，引入模块
  * module 模块， 用来批量exports; module.exports == exports false
  * exports 导入模块,exports 是一个对象，把需要导出的对象挂在exports上
 * 2. npm
 *  node_modules，存放系统模块或第三方模块，引入时直接引入，会自动到node_modules中查找；
 *  自定义模块引入时需要指定路径，否则会去node_modules中查找
 * 3. 发布模块
 *  npm addUser
 *  npm login
 *  npm init
 *  npm publish
 *  修改版本号，之后再npm publish
 * 
 * 使用时， npm update xxx
 * 
 */
const demo = require('./7moduleDemo');
console.log(demo.a)
console.log(demo.b)
console.log(demo.c)