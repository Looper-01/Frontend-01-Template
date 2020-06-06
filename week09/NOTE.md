<!--
 * @Description: week09课堂笔记
 * @Author: Looper
 * @Date: 2020-04-22 21:47:02
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-06 21:13:29
 * @FilePath: \Frontend-01-Template\week09\NOTE.md
 -->

# week09-1

## 贝塞尔曲线[cubic-bezier]

https://cubic-bezier.com/

- 一次贝塞尔曲线
- 二次贝塞尔曲线
- 三次贝塞尔曲线

## 颜色

- CMYK（计算机颜色）与 RGB（三原色）
- HSL&HSV

## 形状

- data uri + svg

## 作业

找一个空白页面，选择 body getComputedStyle(document.body)，将其所有的
CSS 属性(web-kit 前缀的忽略)进行分类：layout、interactive、render/draw、svg、other

---

# WEEK09-2

# 重学 HTML

## DTD

- https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd
- 使用 pre 标签 or 使用 style 属性：pre-wrap，避免 white space 合并

## HTML 标签——语义

- 使用 HTML 格式布局一篇论文 [World Wide Web]("http://static001.geekbang.org/static/time/quote/World_Wide_Web-Wikipedia.html")

## 合法元素

- Element
- Text 文本节点
- Comment 注释
- DocumentType
- ProcessingInstruction 处理信息
- CDATA

## 字符引用

- &#161;
- &amp;
- &lt;
- &quot;

# 重学 DOM

## 修改操作

- appendChild
- insertBefore
- removeChild
- replaceChild

## 导航类操作

- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling

## 高级操作

- compareDocumentPosition
- contains
- isEqualNode
- isSameNode
- cloneNode
