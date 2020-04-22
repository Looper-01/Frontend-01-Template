/*
 * @Description: 正则表达式作业
 * @Author: Looper
 * @Date: 2020-04-22 21:55:35
 * @LastEditors: Looper
 * @LastEditTime: 2020-04-22 22:01:57
 * @FilePath: \Frontend-01-Template\week02\reg.js
 */

// 写一个正则表达式 匹配所有 Number 直接量
var reg1 = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/;

// 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
var reg2 = /[^\"]+/;
var reg3 = /[\s\S]*/;
var reg4 = /[\d\D]*/;
var reg5 = /[\w\W]*/;

// 将字符串格式化为UTF8编码的字节
function utf8Encoding(str) {
  let result = ''
  for (let s of str) {
    result += `\\u${s.charCodeAt().toString(16)}`
  }
  return result
}