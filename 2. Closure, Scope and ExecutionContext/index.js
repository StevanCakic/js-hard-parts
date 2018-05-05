// http://csbin.io/closures

console.log("Hello, world!");

// Challenge 1
/**
 * Create a function createFunction that creates and returns a function.
 * When that created function is called, it should print "hello".
 */

function createFunction() {
  function printHello() {
    console.log("hello");
  }
  return printHello;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var function1 = createFunction();
// function1();

// Challenge 2
/**
 * Create a function createFunctionPrinter that accepts one input and returns
 * a function. When that created function is called, it should print out
 * the input that was used when the function was created.
 */
function createFunctionPrinter(input) {
  function printInput() {
    console.log(input);
  }
  return printInput;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var printSample = createFunctionPrinter("sample");
// printSample();
// var printHello = createFunctionPrinter("hello");
// printHello();

// Challenge 3
/**
 * Examine the code for the outer function. Notice that we are returning
 * a function and that function is using variables that are outside of its scope.
 * Uncomment those lines of code. Try to deduce the output before executing.
 */

function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

// Challenge 4
/**
 * Now we are going to create a function addByX that returns a function
 * that will add an input by x
 */

function addByX(x) {
  function add(num) {
    return x + num;
  }
  return add;
}

var addByTwo = addByX(2);

// UNCOMMENT THESE TO TEST YOUR WORK!
// addByTwo(1); //should return 3
// addByTwo(2); //should return 4
// addByTwo(3); //should return 5

// var addByThree = addByX(3);
// addByThree(1); //should return 4
// addByThree(2); //should return 5

// var addByFour = addByX(4);
// addByFour(4); //should return 8
// addByFour(10); //should return 14

//--------------------------------------------------
// Extension
//--------------------------------------------------

// Challenge 5
/**
  Write a function once that accepts a callback as input and returns
  a function. When the returned function is called the first time,
  it should call the callback and return that output.
  If it is called any additional times, instead of calling the callback
  again it will simply return the output value from the first time it was called.
 */
function once(func) {
  let counter = 0;
  let result;
  function callCallback(num) {
    counter++;
    return counter < 2 ? (result = func(num)) : result;
  }
  return callCallback;
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4)); //should log 6
// console.log(onceFunc(10)); //should log 6
// console.log(onceFunc(9001)); //should log 6

// Challenge 6
/**
 * Write a function after that takes the number of times the callback
 * needs to be called before being executed as the first parameter
 * and the callback as the second parameter.
 */

function after(count, func) {
  let counter = 0;
  function executeCallback() {
    counter++;
    if (counter >= count) {
      return func();
    }
  }
  return executeCallback;
}

var called = function() {
  console.log("hello");
};
var afterCalled = after(3, called);

// UNCOMMENT THESE TO TEST YOUR WORK!
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed
// afterCalled(); // -> nothing is printed

/**
 * Write a function delay that accepts a callback as the first parameter
 * and the wait in milliseconds before allowing the callback to be invoked
 * as the second parameter.
 * Any additional arguments after wait are provided to func
 * when it is invoked.
 */

function delay(func, wait) {
  setTimeout(() => func(), wait);
}

delay(function printHi() {
  console.log("Hi");
}, 1000);
