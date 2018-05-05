// http://csbin.io/callbacks
console.log("Hello, world!");

// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
// console.log(addS("pizza"));
// console.log(addS("bagel"));

// Challenge 3
/*
  Create a function called map that takes two inputs:
    1. an array of numbers (a list of numbers)
    2. a 'callback' function - a function that is applied to each element
     of the array (inside of the function 'map')
  Have map return a new array filled with numbers that are the result 
  of using the 'callback' function on each element of the input array.
*/
function map(array, callback) {
  //First approach
  let output = [];
  for (let elem of array) {
    output.push(callback(elem));
  }
  return output;

  // Second approach
  /* return array.map(function(elem) { 
        return callback(elem)); 
  })  
  */
}

// uncomment these to check your work
// console.log(map([1, 2, 3], addTwo));

// Challenge 4
/*
  The function forEach takes an array and a callback, 
  and runs the callback on each element of the array. 
  forEach does not return anything
*/
function forEach(array, callback) {
  for (let elem of array) {
    callback(elem);
  }
}

// see for yourself if your forEach works!

/* let alphabet = '';
let letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); */

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
/**
 * In the first part of the extension, you're going to rebuild map as mapWith.
 * This time you're going to use forEach inside of mapWith instead of using a for loop
 */
function mapWith(array, callback) {
  let output = [];

  forEach(array, function(elem) {
    output.push(callback(elem));
  });

  return output;
}

// Test it:
// console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
/**
 * 
 The function reduce takes an array and reduces the elements to a single value. 
 For example it can sum all the numbers, multiply them, or any operation that you can put into a function. 
 */
function reduce(array, callback, initialValue) {
  for (let elem of array) {
    initialValue = callback(initialValue, elem);
  }
  return initialValue;
}

// Test it:
/*
  let nums = [4, 1, 3];
  let add = function(a, b) { return a + b; }
  console.log(reduce(nums, add, 0));
*/

//Extension 3
/**
 * Construct a function intersection that compares input arrays and returns a new array
 *  with elements found in all of the inputs. BONUS: Use reduce!
 */
function intersection(...arrays) {
  return reduce(
    arrays,
    (a, b) => {
      let result = [];
      for (let elem of b) {
        if (a.indexOf(elem) > -1) {
          result.push(elem);
        }
      }
      return result;
    },
    arrays[0]
  );
}

// Test it!
/*
console.log(
  intersection(
    [5, 3, 10, 15, 20],
    [15, 2, 3, 88, 1, 5, 7],
    [1, 3, 10, 15, 5, 20]
  )
);*/

// should log: [3, 15, 5]

//Extension 4
/**
  Construct a function union that compares input arrays and returns a new array 
  that contains all elements. If there are duplicate elements, only add it once to the new array.
  Preserve the order of the elements starting from the first element of the first input array. 
  BONUS: Use reduce!
 */
function union(...arrays) {
  return reduce(
    arrays,
    (a, b) => {
      let result = Array.from(a);
      for (let elem of b) {
        if (a.indexOf(elem) == -1) {
          result.push(elem);
        }
      }
      return result;
    },
    []
  );
}

// Test it!
// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
/**
  Construct a function objOfMatches that accepts two arrays and a callback. 
  objOfMatches will build an object and return it. 
  To build the object, objOfMatches will test each element of the first array using
  the callback to see if the output matches the corresponding element (by index) of the second array.
  If there is a match, the element from the first array becomes a key in an object, 
  and the element from the second array becomes the corresponding value. 
 */
function objOfMatches(array1, array2, callback) {
  return array1
    .map(elem => {
      return { [elem]: callback(elem) };
    })
    .filter(elem => array2.indexOf(Object.values(elem)[0]) > -1);
}

// Test it!
/*
console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function(str) {
      return str.toUpperCase();
    }
  )
); */
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
/**
  Construct a function multiMap that will accept two arrays:
  an array of values and an array of callbacks. 
  multiMap will return an object whose keys match the elements in the array of values. 
  The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks,
  where the input to each callback is the key.
 */
function multiMap(arrVals, arrCallbacks) {
  let resultArr = arrVals.map(elem => {
    let arrayOfNewVals = [];
    for (let callback of arrCallbacks) {
      arrayOfNewVals.push(callback(elem));
    }
    return { [elem]: arrayOfNewVals };
  });

  return Object.assign({}, ...resultArr);
}

// Test it!
/* console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function(str) {
        return str.toUpperCase();
      },
      function(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function(str) {
        return str + str;
      }
    ]
  )
); */
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
