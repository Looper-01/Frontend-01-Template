/*
 * @Description: app index
 * @Author: Looper
 * @Date: 2020-08-28 15:08:09
 * @LastEditors: Looper
 * @LastEditTime: 2020-09-01 22:46:37
 * @FilePath: \Frontend-01-Template\week17\yeoman\generators\app\index.js
 */
var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option("babel");
  }

  method1() {
    this.log("method 1 just ran");
  }

  method2() {
    this.log("method 2 just run");
  }
};
