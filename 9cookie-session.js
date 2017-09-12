/**
 * cookie：
 * http 无状态的，两次http请求，服务器不知道是谁；
 * cookies是在浏览器保存的一些数据，每次向浏览器发送请求时，会带上cookie,从而识别http来源
 * 不安全
 * 4k
 * 
 * session 
 * 保存数据，保存在服务端
 * 安全
 * 
 * session是基于cookie实现的
 *  浏览器第一次访问服务器，服务器设置cookie{session id}返回给浏览器，并把{session id}保存到服务器,利用sessionid 对session文件进行访问
 * 
 * sessionid ： 存在被劫持的风险
 * 
 * 
 * 使用：
 * cookie
 * 读取：cookie-parse
 * 发送：res.cookie('user', 'blue', {path: '/aaa', maxAge: 60 * 60})
 *  {key, value, cookieOptions} 过期时间，cookie路径
 * res.clearCookie
 * 设置签名：
 * session
 * 读取： cookie-session
 * 
 */
const express=require('express')
var server = express()
// cookie-parser 中间件，处理cookie
server.use(require(cookie-parser)(''))
server.use('/', (req, res) => {
  // 设置,发送cookie
  res.cookie('user', 'blue', {path: '/aaa', maxAge: 60 * 60})
  res.sned('ok')
})
server.listen(8888)



