// 执行上下文 executor context -> 1. 变量对象、作用域链、this   VO -> AO

// 1. 预编译阶段： VO（Variable Object） 创建，未赋值
// 2. 执行阶段：AO (Active Object) 被激活
// 3. 执行结束: GC (Garbage Collection) 销毁执行上下文，垃圾回收

//  [step1] parse -> variable , function hosting  -> [step2] executor(赋值、计算)
{
  function bar() {
    console.log("bar1");
  }

  var bar = function () {
    console.log("bar2");
  };

  bar(); // bar2     1. bar 变量提升声明  -> 2. 函数声明 -> 3. 赋值
}

{
  var bar = function () {
    console.log("bar2");
  };
  function bar() {
    console.log("bar1");
  }

  bar(); // bar2    1. bar 提升声明  -> 2. 函数声明 -> 3. 赋值
}

// exercises
{
  foo(10); //
  function foo(num) {
    console.log(foo); // undefined
    foo = num;
    console.log(foo); // 10
    var foo;
  }

  console.log(foo); // Function[foo]
  foo = 1;
  console.log(foo); // 1

  // undefined 10 Function[foo] 1
}
