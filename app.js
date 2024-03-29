console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");
let a = 20; 
let b = 4; 
let add = a + b; 
let minus = a - b; 
let mutiply = a * b;
let dividing = a / b; 

console.log(a); // 20
console.log(b); // 4
console.log(add); // 24
console.log(minus); // 16
console.log(mutiply); // 80
console.log(dividing); // 5

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

console.log(num + str); // 1111
console.log(num + str2); // 11eleven
console.log(num + isPresent); // 12
console.log(firstName + num); // Frodo11
console.log(isPresent + str); // true11
console.log(firstName + lastName); // FrodoBaggins

/*
order - - - 
depends on the operation being performed
1. strings
2. numbers
3. boolean

What is the value of: num + str?
1111  -- taking the string side 

What is the value of: num + str2?
11eleven

What is the value of: num + isPresent?
?? - dont know - maybe numbers 
boolean can compute to numbers True - 1  or False - 0

What is the value of: firstName + num?
Frodo11

What is the value of: isPresent + str?
true11 

What is the value of: firstName + lastName?
FrodoBaggins
*/


// YOUR CODE HERE





// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let val = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;


console.log(val == str3); // true 
console.log(val === str3); // false
console.log(!isPresent2); // true
console.log("eleven" == str4 && val >= str3); // false 
console.log((!isPresent2 || isPresent2)); // true
console.log(0 == false); // true 
console.log(0 === false); // false 
console.log(0 != false); // false 
console.log(0 !== false); // true


//What is the value of: val == str3?
//  true 
// loosely checking 

//What is the value of: val === str3?
// strickly 
// false 


//What is the value of: !isPresent2?
// not isPresent2   with are starting with false - we are saying not false 
// so it makes the answer true


//What is the value of: (“eleven” == str4 && val >= str3)?
// two expressions to check 
// left side - both strings -- false    &&
// right side  number 5 and "5" - evaluate as numbers - true 

//What is the value of: (!isPresent2 || isPresent2)?
  // as long is one side is true  - left side is true 
  // answer is true 



//What is the value of: 0 == false?
  // true 
  // loose sense  0 = F

//What is the value of: 0 === false?
// false 

//What is the value of: 0 != false?

   // false 
//What is the value of 0 !== false?
  // true

// YOUR CODE HERE

// = assignment 
// == loose 
// === strict 
// - - - think as operators
