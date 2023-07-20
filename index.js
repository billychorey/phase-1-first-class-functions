//receivesAFunction
//Take a callback function as an argument
//call the callback function
//return anything
function morningRoutine() {
  console.log("flatiron work");
}

function receivesAFunction(morningRoutine) {
  console.log(morningRoutine() + "followed by everything else.");
}

//returnsANamedFunction
//take no arguments
//return a named function

function returnsANamedFunction() {
  function namedFunction() {
    console.log("This is a named function!");
  }

  // Return the named function
  return namedFunction;
}

//returnAnAnonymousFunction
//take no arguments
//return an anonymous function

function returnsAnAnonymousFunction() {
  return function () {
    console.log("This is anonymous.");
  };
}
