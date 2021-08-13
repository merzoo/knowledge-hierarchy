Function.prototype.bind = function (context, ...args) {
  return (...rest) => this.apply(context, [...args, ...rest]);
};

// 进阶 返回函数当构造函数使用时， new xxx()
// 返回函数的 length  形参个数失真问题
