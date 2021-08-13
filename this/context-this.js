const student = {
  name: "Lucas",
  fn() {
    return this;
  },
};

console.log(student.fn() === student); //true

// 复杂嵌套调用，this 为 最后调用的对象
const person = {
  name: "merzoo",
  brother: {
    name: "mike",
    fn() {
      return this.name;
    },
  },
};

console.log(person.brother.fn()); // mike

// exercise

const o1 = {
  text: "o1",
  fn() {
    return this.text;
  },
};

const o2 = {
  text: "o2",
  fn() {
    return o1.fn();
  },
};

const o3 = {
  text: "o3",
  fn() {
    const fn = o1.fn;
    return fn();
  },
};

console.log(o1.fn()); // o1
console.log(o2.fn()); // o1
console.log(o3.fn()); // undefined

// 进阶，使 o2.fn() -> o2

const o2_s1 = {
  text: "o2",
  fn: o1.fn,
};

const o2_s2 = {
  text: "o2",
  fn() {
    return o1.fn.call(o2); // apply is ok, too
  },
};

console.log(o2_s1.fn()); // o2
console.log(o2_s2.fn()); // o2
