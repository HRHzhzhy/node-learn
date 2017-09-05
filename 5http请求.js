/**
 * 前台向后台发送请求：三种方式，都是http协议
 * form
 * ajax
 * jsonp
 * 后台处理，只有一种方式，拿到数据，解析数据
 * 
 */
const http = require('http')
const querystring = require('querystring')
const urlLib = require('url')
http.createServer((req, res) => {
  /**
   * get 数据处理
   * get 数据都在url里，所以直接处理url就可以得到数据
   */
  console.log(req.url) // form表单提交的地址：/aaa?user=user&pass=pass
  /**
   * 处理url,分离参数，？& ，key value【自己实现】
   * 使用node中的querystring模块 'foo=bar&abc=xyz&abc=123',解析成{foo: 'bar'， abc: [xyz, 123]}
   * 使用url模块，直接解析url, 可以把url中所有信息都解析出来
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: '?user=1111&pass=22222',
      query: { user: '1111', pass: '22222' },
      pathname: '/aaa',
      path: '/aaa?user=1111&pass=22222',
      href: '/aaa?user=1111&pass=22222' }
   */ 
  console.log(urlLib.parse(req.url, true)) // true 用来把query变成对象
  /**
   * post 数据处理
   * 请求头：32k,请求体 1g,post请求数据比get大，大很多
   * post数据在请求体里，需要解析请求体
   * 拼接后数据后，使用querystring可以把数据解析成对象：querystring.parse(str)
   */
  // data事件会触发多次,post分片发送，对服务器来说是一个data事件，监听这个事件并把所有的数据拼接到一起，拿到完整的数据
  var str = '' // 使用字符串拼接data,只能接受字符类型的数据，如果是视频图片之类的类型就没有意义
  var n = 1
  req.on('data', (chunk) => {
    console.log(`第${n++}次收到数据`)
    str += chunk
    // console.log(str)
  })
  // end事件，数据都到达后会触发一次
  req.on('end', () => {
    // 解析post表单的数据：{ user: '1', pass: '2', content: '' }
    console.log(querystring.parse(str))
  })
  
}).listen('9999')