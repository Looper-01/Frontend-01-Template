
# week08学习笔记

## 1、重学CSS、CSS基本语法，CSS基本机制

### 练习

请写出下面选择器的优先级

* div#a.b .c[id=x]
* #a:not(#b)
* *.a
* div.a

### 思考

为什么first-letter可以设置display:block之类的，而first-line不行呢？

### 课后作业

编写一个[match](./match.js)函数

---

## 2、重学CSS、CSS基本语法，CSS基本机制

### 参考词汇

* IFC：inline formatting context
* BFC：block formatting context

### 后记

* 大家请记住下面这个表现原则：如果一个元素具有 BFC，内部子元素再怎么翻江倒海、翻云覆雨，都不会影响外部的元素。所以，BFC 元素是不可能发生 margin 重叠的，因为 margin 重叠是会影响外部的元素的；BFC 元素也可以用来清除浮动的影响，因为如果不清除，子元素浮动则父元素高度塌陷，必然会影响后面元素布局和定位，这显然有违 BFC 元素的子元素不会影响外部元素的设定。
* block-level 表示可以被放入 bfc
* block-container 表示可以容纳 bfc
* block-box = block-level + block-container
* block-box 如果 overflow 是 visible， 那么就跟父 bfc 合并
