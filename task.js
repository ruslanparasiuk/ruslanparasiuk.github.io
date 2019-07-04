////////////// Task 1 ////////////
// Build a function that does currency converter from USD to UAH (1 USD = 8 UAH). //
const exchange = 8;
function convert(amount) {
  return amount*exchange;
 }

////////////// Task 2 ////////////
// A function which returns reversed string. 
function reverse(str) {
  if (typeof(str) == "string") {
  const nStr = "";
  for (const i = str.length - 1; i >=0; i--) {
  nStr += str[i];
  }
  return nStr;
}

////////////// Task 3 ////////////
// A function which prints the stair picture of size n
function printStairs(n) {
  const str = "";
  for (let i = 0; i < n; i++) {
  console.log(str)
  str += "#";
  }
 }
 printStairs(5);
 ////////////// Task 4 ////////////
 // A function which returns total sum of a range
 function sumRange(start, end) {
    let sum = 0;
    for (let i = start; i<=end; i++) {
      sum = sum + i;
      }
      return sum;
      }
      
      
 ////////////// Task 5 ////////////  
// Write a function which returns the smallest of three numbers.

function min (a, b ,c) {
  if (a < b) {
    if (a < c) return a;
    else return c;
    } else {
      if (b <c) return b;
      else return c
      }
      }
  console.log    min(10, 5, 11) // 5
min(3, 8, 4) // 3
 ////////////// Task 8 ////////////  
 //A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive.
 
function cursorCheck(str) { 
str = str.toLowerCase();
return (str.search("iroonman") != (-1) 
str. search("cursor"} !=(-1) 
str search("ostap") != (-1)) true : false;
cursorCheck('Hello I am OstaP') // true
cursorCheck('Superman is here') // false
