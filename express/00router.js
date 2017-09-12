// const express = require('express')
// const app = express()
// const server = app.listen(9999, () => {
//   console.log('listening 9999')
// })

/**
路由句柄
*/
const express = require('express')
const app = express()
const server = app.listen(9999, () => {
  console.log('listening 9999')
})
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}
// 多个回调函数，按照数组顺序执行；需要next传递；执行 cb0, cb1, cb2
// app.get('/router', [cb0, cb1, cb2]);
// // 执行顺序cb0, cb1 console.log('response will be sent by the next function ...') res.send('Hello from D!')
// app.get('/router/d', [cb0, cb1], function (req, res, next) {
//   console.log('response will be sent by the next function ...');
//   next();
// }, function (req, res) {
//   res.send('Hello from D!');
// });

/**
路由中间件
*/
const router = express.Router
// 所有的请求都会经过这里
router.use((req, res, next) => {
  console.log(`time: ${Date.now()}`)
  next()
})

router.get('/', function(req, res) {
  res.send('home page');
});
// 定义 about 页面的路由
router.get('/about', function(req, res) {
  res.send('About ');
});

app.use('/router', router)
