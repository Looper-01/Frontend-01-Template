/*
 * @Description:
 * @Author: Looper
 * @Date: 2020-06-11 20:08:15
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-11 20:14:08
 * @FilePath: \Frontend-01-Template-Demo\week10\reverseChildren.js
 */

let element = document.getElementById("a");
let temp = document.createDocumentFragment();
function reverse(element) {
  let children = element.children;
  for (let i = children.length - 1; i >= 0; i--) {
    temp.appendChild(children[i]);
  }
  element.appendChild(temp);
}
