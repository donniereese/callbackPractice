/*  For today's coding challenge your job is to write functions
 *  so that each function call works.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  const greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
*/


// Write a function called firstItem that passes the first item of the given array to the callback function

const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

const firstItem = (foods, (firstItem, cb) => {
  cb(`The first item is ${firstItem}.`);
});

// Write a function called getLength that passes the length of the array into the callback

const getLength = (foods, (length, cb) => {
  cb(`The length of the array is ${length}.`);
});

// Write a function called last which passes the last item of the array into the callback

const last = (foods, (lastItem, cb) => {
  cb(`The last item in the array is ${lastItem}.`);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback


const sumNums = (5, 10, (sum, cb) => {
  cb(`The sum is ${sum}.`);
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback

const multiplyNums = (5, 10, (product, cb) => {
  cb(`The product is ${product}.`);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false

const contains = (foods, 'ribeye', (result, cb) => {
  cb(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

const removeDuplicates = (foods, (uniqueFoods, cb) => {
  cb(`foods with duplicates removed: ${uniqueFoods}`);
});

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.

const forEach = (foods, (value, index, cb) => {
  cb(`${value} is at index ${index}.`);
});
