/*
 * @Description: 正则表达式作业
 * @Author: Looper
 * @Date: 2020-04-22 21:55:35
 * @LastEditors: Looper
 * @LastEditTime: 2020-04-22 22:14:20
 * @FilePath: \Frontend-01-Template\week02\reg.js
 */

// 写一个正则表达式 匹配所有 Number 直接量
const numberReg2 = /\-?0(b|B)((0+1)|(1[0-1]?1))\.?|((0+1)|(1[0-1]?1))?\.((0[0-1]+1)|(1[0-1]+1))/;
const numberReg8 = /\-?0(o|O)((0|[1-7]([0-7]+)?))\.?|(((0|[1-7]([0-7]+)?))?\.((0+[0-7]+[1-7]+)|([1-7]+[0-7]+[1-7]+)))/;
const numberReg10 = /\-?((0|[1-9](\d+)?))\.?|(((0|[1-9](\d+)?))?\.((0+\d+[1-9]+)|([1-9]+\d+[1-9]+)))/;
const numberReg16 = /\-?0(x|X)((0|[1-9a-fA-F]([0-9a-fA-F]+)?))\.?|(((0|[1-9a-fA-F]([0-9a-fA-F]+)?))?\.((0+[0-9a-fA-F]+[1-9a-fA-F]+)|([1-9a-fA-F]+[0-9a-fA-F]+[1-9a-fA-F]+)))/;

// 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
const strReg = /(^'((\w\r|\n|\f|\t|\v|")?(\w\r|\n|\f|\t|\v)?)'$)|(^"((\w\r|\n|\f|\t|\v|")?(\w\r|\n|\f|\t|\v)?)"$)/;

// 将字符串格式化为UTF8编码的字节
function utf8Encoding(str) {
  let result = ''
  for (let s of str) {
    result += `\\u${s.charCodeAt().toString(16)}`
  }
  return result
}