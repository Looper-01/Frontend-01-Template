<!--
 * @Description: 第17周学习总结
 * @Author: Looper
 * @Date: 2020-04-22 21:47:02
 * @LastEditors: Looper
 * @LastEditTime: 2020-08-05 22:57:53
 * @FilePath: \Frontend-01-Template\week17\NOTE.md
-->

# 每周总结可以写在这里

## 组件化最后总结

- 通过对组件和 jsx 的学习，了解了 jsx 的运行机制
- render 函数的作用是生成所描述的节点对象，里面包含子节点的对象、属性、样式等
- eg:div 节点生成后 divObj{child:[childObj1,childObj2]...}
- mount 函数的作用是把最后的父对象全转化成 dom 元素并且遍历子对象生成对应的 dom 元素
- 需要注意的是，当 render 函数中修改 or 添加子节点时，要把添加的子节点变成数组的形式

```
render() {
  this.childView = this.children.map(child => {
    <div style="min-height:300px;">{child}</div>
  });
  this.titleViews = this.children.map((child,i) => {
    return (
      <span onClick={()=>this.select(i)} style="padding:5px; font-size:24px; cursor:point;">
        {child.getAttribute('title')||''}
      </span>
    )
  });
  setTimeout(()=>{
    this.select(i)
  },16);
  return (
    <div class="panel" style="border:1px solid green; width 300px;">
      <h1 style="background:red; margin:0;">
        {this.titleViews}
      </h1>
    </div>
  );
}
```

- {this.titleViews} 是数组才能添加到 h1 元素对象的 child 属性里

## 命令行选择器原理

通过 node 自带的 process.stdout 和 process.stdin 实现控制台的命令选择
通过输出特定的字符，可以控制命令行中光标的位置做一些特殊的操作，like：

- '\033[1A' = 上移光标
- '\033[1B' = 下移光标
- '\033[1C' = 右移光标
- '\033[1D' = 左移光标
- '\033[nk' = 清空 n 行
- '\033[n;mH' = 移动 n 行 m 列
  有了这些就可以像画图一样渲染命令行界面，当用户在选择(按键)时，触发修改，然后重新渲染界面。直到按下回车键强行退出。
