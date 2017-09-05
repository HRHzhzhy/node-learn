/**
 * 接口定义：
 * /user?act=reg&user=aaa&pass=123;
 *  返回值：{ok: false, msg: '原因'}
 */
const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')

var server = http.createServer((req, res) => {
  // 解析数据
  var str = ''
  req.on('data', (data) => {
    // 接收，拼接数据
    str += data
  })
  req.on('end', () => {
    // get解析
    var obj = urlLib.parse(req.url, true)
    const url = obj.pathname
    const GET = obj.query
    // post解析
    const POST = querystring.parse(str)
    // 对数据进行处理，区分接口和文件
    if (url === '/user') { // 处理接口
      switch(GET.act){
        case 'reg':
        // 检查用户，插入用户
        break
        // 检查用户，检查用户密码
        case 'login':
        break
        default:
        res.write('{"ok": false, "msg": "act非法"}')
        res.end()
      }
    } else { // 处理文件
      var fileName = `./www${url}`
      fs.readFile(fileName, (err, data) => {
        if (err) {
          res.write('{"ok": false, "msg": "文件不存在"}')
        } else {
          res.write(data)
        }
        res.end()
      })
    }
  })
})