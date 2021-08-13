function f1() {
  console.log(this);
}

function f2() {
  "use strict";
  console.log(this);
}

f1(); // window, gloabl when i used node
f2(); // undefined

// exercise

/** case1 */
(() => {
  const foo = {
    bar: 10,
    fn: function () {
      console.log(this);
      console.log(this.bar);
    },
  };

  const fn1 = foo.fn;

  fn1(); // window , undefined
})();

/**case2 */
(() => {
  const foo = {
    bar: 10,
    fn: function () {
      console.log(this);
      console.log(this.bar);
    },
  };

  foo.fn(); // foo ,  10
})();
