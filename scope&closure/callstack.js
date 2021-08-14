// call stack

function foo1() {
  foo2();
}

function foo2() {
  foo3();
}

function foo3() {
  foo4();
}

function foo4() {
  console.log("foo4");
}

foo1(); // foo1 -> foo2 -> foo3 -> foo4
