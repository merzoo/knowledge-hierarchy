const foo = {
  fn() {
    // this is the context
    setTimeout(() => {
      // inherit this
      console.log(this);
    });
  },
};

console.log(foo.fn()); // foo
