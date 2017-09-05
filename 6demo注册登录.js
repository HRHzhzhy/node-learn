/**
 * 接口定义：
 * /user?act=reg&user=aaa&pass=123;
 *  返回值：{ok: false, msg: '原因'}
 */
const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')
var users = {} // 存储用户名和密码 {'zhangsan': '123', 'lisi', '1234'}
var server = http.createServer(function (req, res) {
  // 解析数据
  var str = ''
  req.on('data', (data) => {
    // 接收，拼接数据
    str += data
  })
  req.on('end', () => {
    // get解析
    var obj = urlLib.parse(req.url, true)
    const url = decodeURIComponent(obj.pathname)
    const GET = obj.query
    console.log(obj.query)
    console.log(url)
    // post解析
    const POST = querystring.parse(str)
    // 对数据进行处理，区分接口和文件
    if (url === '/user') { // 处理接口
      switch(GET.act){
        case 'reg':
        // 检查用户，插入用户
        for (let key in users) {
          console.log(`${key}: ${users[key]}`)
        }
          if (users[GET.name]) {
            
            res.write('{"ok": false, "msg": "用户已存在"}')
          } else {
            users[GET.name] = GET.pass
            for (let key in users) {
              console.log(`${key}: ${users[key]}`)
            }
            res.write('{"ok": true, "msg": "注册成功"}')
          }
        break;
        
        case 'login':
        // 检查用户，检查用户密码
        for (let key in users) {
          console.log(`${key}: ${users[key]}`)
        }
        console.log(users[GET.name])
          if (!users[GET.name]) {
            res.write('{"ok": false, "msg": "用户不存在"}')
          } else {
            if (users[GET.name] === GET.pass){
              res.write('{"ok": true, "msg": "登录成功"}')
            } else {
              res.write('{"ok": false, "msg": "密码错误"}')
            }
          }
        break
        default:
        res.write('{"ok": false, "msg": "act非法"}')
      }
      res.end()
    } else { // 处理文件
      var fileName = `./www${url}`
      fs.readFile(fileName, (err, data) => {
        if (err) {
          res.write('{"ok": false, "msg": "404"}')
        } else {
          res.write(data)
        }
        res.end()
      })
    }
  })
}).listen('8888')