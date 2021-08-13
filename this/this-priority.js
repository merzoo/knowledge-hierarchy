// the priority of “this”

/**
 * all, apply > normal
 */
const case1 = (() => {
  function foo(a) {
    console.log(this.a);
  }

  const obj1 = {
    a: 1,
    foo,
  };

  const obj2 = {
    a: 2,
    foo,
  };

  obj1.foo.call(obj2); // 2
  obj2.foo.call(obj1); // 1
})();

/**
 * new > bind
 */
const case2 = (() => {
  function foo(a) {
    this.a = a;
  }

  const obj1 = {};

  const bar = foo.bind(obj1);
  bar(2);

  console.log(obj1.a); //2

  const baz = new bar(3);
  console.log(baz.a); // 3
})();

/**
 * this 指向不可修改
 */
const case3 = (() => {
  function foo() {
    return (a) => {
      console.log(this.a);
    };
  }

  const obj1 = {
    a: 2,
  };

  const obj2 = {
    a: 3,
  };

  const bar = foo.call(obj1); //  this -> obj1

  bar.call(obj2); // 2   箭头函数 this 不能被修改
})();
