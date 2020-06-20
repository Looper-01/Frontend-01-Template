<!--
 * @Description:
 * @Author: Looper
 * @Date: 2020-04-22 21:53:20
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-12 08:57:55
 * @FilePath: \Frontend-01-Template-Demo\week10\NOTE.md
-->

# 重学 DOM

## Range Api——对 DOM 进行精细手术

Range Api 与 document.createDocumentFragment 一起使用有奇效

```
var range = new Range();
range.setStart(element,9)
range.setEnd(element,4);
var range = document.getSection().getRangeAt(0);
range.setStartBefore
range.setEndBefore
range.setStartAfter
range.setEndAfter
range.selectNode

var fragment = range.extractContents()
range.insertNode(document.createTextNode("aaa"))
```

### 富文本编辑器，牛逼的行当

## CSSOM

### Rules

### document.styleSheet

### document.styleSheet[].cssRules

### document.styleSheet[].insertRule("p {color:pink;};",0)

### document.styleSheet[].removeRule(0)

### Rule

### getComputedStyle(elt,pseudoElt);（param1 想要获取的元素，param2 可选伪元素）

### data 协议 base64 编码后的图片

### window api

### scroll api

- window 的 scroll
- dom 的 scroll
- dom.getBoundingClientRect();
- dom.getClientRects();
- window.devicePixelRatio();
- window.innner/outer Height/Width

## 所有 API
let names = Object.getOwnPropertyNames(window);