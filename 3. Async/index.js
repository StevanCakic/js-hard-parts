// http://csbin.io/async

/* CHALLENGE 1 */
/**
 * Thinking point (no writing code necessary for this challenge):
 * Inspect the code given to you in Challenge 1.
 * In what order should the console logs come out?
 * Howdy first or Partnah first?
 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */
/**
 * Create a function delayedGreet that console logs welcome after 3 seconds.
 */
function delayedGreet() {
  setTimeout(() => console.log("welcome"), 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */
/**
 * Create a function helloGoodbye that console logs hello right away,
 * and good bye after 2 seconds.
 */

function helloGoodbye() {
  console.log("hello");
  setTimeout(() => console.log("good bye"), 2000);
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */
/**
 * Create a function brokenRecord that console logs hi again every second.
 * Use the End Code button to stop the console logs when you are
 * satisfied that it is working.
 */

function brokenRecord() {
  let done = false;

  setInterval(() => {
    if (!done) console.log("hi again");
  }, 1000);

  window.addEventListener("keypress", e => {
    if (e.keyCode === 13) {
      done = true;
    }
  });
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */
/**
 * Create a function limitedRepeat that console logs hi for now every
 * second, but only for 5 seconds.
 * Research how to use clearInterval if you are not sure how to do this.
 */

function limitedRepeat() {
  let counter = 0;
  let printEverySecond = setInterval(() => {
    console.log("hi for now");
    counter++;
    if (counter > 4) {
      clearInterval(printEverySecond);
    }
  }, 1000);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */
/**
 * Write a function called everyXsecsForYsecs that will accept three arguments:
 * a function func,
 * a number interval,
 * and another number duration.
 * everyXsecsForYsecs will execute the given function every interval
 * number of milliseconds, but then automatically stop after
 * duration milliseconds.
 * Then pass the below sayHi function into an invocation of everyXsecsForYsecs
 * with 1000 interval time an 5000 duration time.
 * What do you expect to happen?
 */

function everyXsecsForYsecs(callback, interval, duration) {
  let counter = 0;
  let executeCallback = setInterval(() => {
    if (counter < duration) {
      callback();
    }
    counter++;
  }, interval * 1000);
}
// Uncomment the following lines to check your work!
// function theEnd() {
//    console.log("This is the end!");
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
