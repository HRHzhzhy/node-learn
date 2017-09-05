/**
 * http模块
 * fs模块
 */
const http = require('http');
const fs = require('fs')
const basePath = './'
// 创建服务器，参数是一个回调函数
const serve = http.createServer(function (request, response) {
  console.log('server connected')
  // 参数：request, response
  // request.write(request.url) // 访问的相对地址，可以用来处理路由
  var filePath = basePath + request.url // 访问的文件
  // 读取文件并返回给前台
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.write('404')
    } else {
      response.write(data)
    }
  
    response.end()
  })

  // response.write('response to client "hello node http"')
  
})
// 必须要进行监听，否则程序会直接结束
serve.listen('8888', (params) => {
  console.log('listening 8888')
});

