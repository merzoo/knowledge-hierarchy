// closure
function numGenerator() {
  let num = 1;
  num++;
  return () => {
    console.log(num);
  };
}

const getNum = numGenerator();

// 内存管理

// 基本类型在 【栈内存中】，操作系统自动分配释放
// 引用类型在 【堆内存中】，需要开发者分配释放管理

// 内存泄露场景举例

/**
 * case 1
 * element 节点被remove了，但 element 占有的内存没有释放
 */
{
  let element = document.getElementById("element");
  element.mark = "marked";

  function remove() {
    element.parentNode.removeChild(element);
  }
  remove();

  console.log(element); // <span>element</span>

  // 释放内存
  element = null;
  console.log(element); // null
}

/**
 * case 2
 * 事件处理函数绑定了元素，句柄保持了对元素的引用，元素被移除后也无法内存回收，需要解绑
 */
{
  let element = document.getElementById("element");
  element.innerHTML = '<button id="button">点击</button>';

  let button = document.getElementById("button");
  button.addEventListener("click", function () {
    console.log(123);
  });

  element.innerHTML = "";

  // 需要移除绑定，防止内存泄露
  button.removeEventListener("click");
}

/**
 * case 3
 * 定时器引用变量，导致变量无法垃圾回收，需要clear
 */
{
  let timer;
  function foo() {
    const name = "merzoo";
    timer = window.setInterval(() => {
      console.log(name); // 引用 name, name 无法被回收
    }, 1000);
  }
  foo();

  // 清理定时器，释放 name
  clearInterval(timer);
}

// excerises

const case1 = (() => {
  const foo = (function () {
    const v = 0;
    return () => {
      return v++;
    };
  })();

  for (let i = 0; i < 10; i++) {
    foo();
  }

  console.log(foo()); // 10
})();

const case2 = (() => {
  const foo = () => {
    const arr = [];
    var i;

    for (i = 0; i < 10; i++) {
      arr[i] = function () {
        console.log(i);
      };
    }

    return arr[0];
  };

  foo()(); // 10
})();

const case3 = (() => {
  var fn = null;
  const foo = () => {
    var a = 2;
    function innerFoo() {
      console.log(a);
    }
    fn = innerFoo;
  };

  const bar = () => {
    fn();
  };

  foo(); // fn = function innerFoo() { console.log(2)}
  bar(); // fn() => console.log(2) => 2
})();

const case4 = (() => {
  var fn = null;
  const foo = () => {
    var a = 2;
    function innerFoo() {
      console.log(c);
      console.log(a);
    }
    fn = innerFoo;
  };

  const bar = () => {
    var c = 100;
    fn();
  };

  foo();
  bar(); // console.log(c) => Uncaught Reference Error: c is not defined
})();
