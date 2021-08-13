//  call apply bind
const target = {};

//1
fn.call(target, "arg1", "arg2");
//2
fn.apply(target, ["arg1", "arg2"]);
//3
fn.bind(target, "arg1", "arg2")();

//exercises

/**case1 */
const foo = {
  name: "merzoo",
  logName() {
    console.log(this.name);
  },
};

const bar = {
  name: "mike",
};

console.log(foo.logName.call(bar)); // mike
