/**
 * fs file syetem 模块
 */
const fs = require('fs')

// fs.readFile('2.js', (err, data) => {
//   console.log(err, data) // 读取出来的data 是buffer
//   console.log(data.toString())
// })
// 写入到文件，如果没有，就创建新文件
fs.writeFile('fstestNew.txt', '写入到文件', (err) => {
  console.log(err)
})