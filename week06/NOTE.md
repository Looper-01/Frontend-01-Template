# 学习总结
---
这周的代码几乎都是在跟着老师写代码，必须课后细细地再看一遍视频，再把代码给过一遍，才算是有些感觉了。到现在为止，对浏览器的部分已经开始有一些更深的理解了。

## 浏览器工作原理
可以由一道经典的面试题说起：当你在浏览器地址栏里敲下一段URL，到整个网页展示完毕，这个过程中浏览器都发生了什么？

答案可以很丰富，也可以很概括。在这一节课中，我们主要关注浏览器的工作原理，经过一些简化，这个过程大致可以分为以下几个步骤：

【 URL 】 --(HTTP)--> 【 HTML 】 --(parse)--> 【 DOM 】 --(css computing)--> 【 DOM with CSS 】 --(layout)--> 【 DOM with position 】 --(render)--> 【 Bitmap 】

## 难点
可选作业还不会做：使用状态机实现KMP算法。即pattern未知的字符串匹配