/*
中间件是一个函数:
  可以访问 req res next
  可以修改req,res
  可以终止响应
中间件调用
  应用中间件：需要绑定到 app 的 use 对象或 METHOD【get post put delete等】上
  路由中间件：绑定到 router 的 use 对象 或 http请求上
  错误处理中间件： 参数多了一个err  (err, req, res, next)
      app.use(function(err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
      })
  可以挂载路径，也可以不指定路径；
  不指定路径所有的请求都会经过这个中间件；


  自定义中间件就是写一个方法，返回一个方法
  function () {
     return function () {

     }
    }
*/
