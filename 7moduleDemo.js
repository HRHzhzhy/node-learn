var a = 'exports variation from module';
/**
 * 两种输出方式
 * exports.xx = xx 单个输出
 * 批量输出，不用写多个exports
 * module.exports = {
 *    xx: xx
 * }
 */
// exports.a = a
// exports.b = 2
// exports.c = 3
module.exports = {
  a: a,
  b: 2,
  c: 3
}
console.log(module.exports == exports)