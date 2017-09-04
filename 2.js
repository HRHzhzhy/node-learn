/**
 * server.js, http模块
 */
const http = require('http');
// 创建服务器，参数是一个回调函数
const serve = http.createServer(function (request, response) {
  console.log('server connected')
  // 参数：request, response
  request.write(request.url) // 访问的相对地址，可以用来处理路由


  // response.write('response to client "hello node http"')
  response.end()
})
// 必须要进行监听，否则程序会直接结束
serve.listen('8888', (params) => {
  console.log('listening 8888')
});

// 一行代码创建一个服务器
// require('http').createServer((req, res) => {
//   res.write('one line server')
//   res.end()
// }).listen('9999', () => {
//   console.log('listening 9999')
// })