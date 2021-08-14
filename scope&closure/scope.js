// function scope
{
  function foo() {
    const a = "bar";
    console.log(a);
  }

  foo(); // bar
}

// scope chain  finded !(foo -> module -> global)
{
  const b = "bar";

  function foo() {
    console.log(b);
  }

  foo(); // bar
}

// scope chian (not defined!)
{
  function bar() {
    const b = "bar";
  }

  function foo() {
    console.log(b);
  }

  foo(); // error -> Uncaoght ReferenceError: b is not defined
}

// hosting
{
  function foo() {
    console.log(bar);
    var bar = 3;
  }

  foo(); // undefined  -> hosting: is same to    var bar; console.log(bar); bar = 3
}

// block scope & temporal dead zone
{
  function foo() {
    console.log(bar);
    let bar = 3;
  }
  foo(); // error -> Uncaoght ReferenceError: bar is not defined
}

// function arguments has been declared
{
  function foo(arg1) {
    let arg1;
  }
  foo("arg1"); // error -> Uncaught SyntaxError: Identifier 'arg1' has already been declared
}
