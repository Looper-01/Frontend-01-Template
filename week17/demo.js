// 不用函数命实现递归
((f) => {})(
  ((g) =>
    ((f) => f(f))((self) => g((...args) => self(self).apply(this, args))))(
    (self) => {
      return (n) => (n > 0 ? self(n - 1) + n : 0);
    }
  )
);

// 提取
var y = (g) =>
  ((f) => f(f))((self) => g((...args) => self(self).apply(this, args)));

// call
let f = y((self) => {
  return (n) => (n > 0 ? self(n - 1) + n : 0);
});

f(100); // 5050
