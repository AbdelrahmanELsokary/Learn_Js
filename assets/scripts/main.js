/*  
  ?JavaScript Number Methods
 * .toString()
 * .toFixed()
 * Math.max()
 * Math.min()
 * Number()
 * Math.
 * isNaN
 * parsFloat
 * parseInt
 */

// let number = 10;
// let number1 = 11.4;
// let number2 = 11.8;
// console.log(number.toString()); //Convert from number to string
// console.log(number2.toFixed()); //Format a decimal number (decimal number) and specify the number of digits after the decimal point.
// console.log(Math.max(55, 5, 3)); // to find the largest value among a set of numbers.
// console.log(Math.min(55, 5, 3)); // to find the smaller value among a set of numbers.
// console.log(Number()); //It is a compact object used to represent and manipulate numerical values. It can be dealt with both integers and decimals.
// console.log(Math.PI); //An intrinsic object that provides basic mathematics functionality and constants.
// console.log(isNaN(888 + "hl")); //is a built-in function used to check if a given value is not a number. They are mainly used to check values that cannot be converted to numbers.
// console.log(parseFloat("90999.99890")); //A compact function used to convert a string to a float. This function converts the part of the text string that can be converted to a decimal number, and ignores anything after the number if it is not convertible.
// console.log(parseInt("5.9")); //A built-in function used to convert a string to an integer. This function converts the text string to an integer using the convertible part of the string and ignoring any non-convertible part.

/*
  !JavaScript String Methods
 * .length        
 * .trim()        
 * .trimStart()   
 * .trimEnd()     
 * .toUpperCase() 
 * .toLowerCase() 
 * .charAt()      
 * .reapet()      
 * .concat()     
 * .split()
 */

/*
 * index  Start From 0
 * length Start From 1
 */

/**let myName = "Abdelrahman Mahmoud";
let lastName = "Elsokary";
console.log(myName.trim()); //Removes the leading and trailing white space and line terminator characters from a string.
console.log(myName.trimStart()); //Removes the leading white space and line terminator characters from a string.
console.log(myName.trimEnd());  //Removes the trailing white space and line terminator characters from a string.
console.log(myName.toUpperCase()); //Converts all the alphabetic characters in a string to uppercase.
console.log(myName.toLowerCase()); //Converts all the alphabetic characters in a string to lowercase.
console.log(myName.charAt(10)); //Returns the character at the specified index , start from zero
console.log(myName.repeat(77)); //Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
console.log(myName.concat(lastName)); // To combine string or arrays with each other.
console.log(myName.split(" ")); //Splits strings into an array of parts based on a given separator (Delimiter).
*/

//--------------------------------------------------\\
/*

function squareRoot(number) {
  if (typeof number == "number") {
    number **= 0.5;
  } else {
    console.log("Please enter a number");
  }
  return number;
}

let result = squareRoot(100);
console.log(result);
 */
//----------------------------------\\

/*
function convertMinutesIntoSeconds(minutes) {
  if (typeof minutes == "number") {
    minutes *= 60;
  } else {
    console.log("Error");
  }
  return minutes;
}

let seconds = convertMinutesIntoSeconds(1);

console.log(seconds);
 */

/*
function convertMinutesIntoSeconds(minutes) {
  if (!isNaN(minutes)) {
    console.log(minutes * 60);
  } else {
    console.log("Error");
  }
}

convertMinutesIntoSeconds(60);
 */

//------------------------\\

function returnTheNextNumber(number) {
  if (!isNaN(number)) {
    ++number;
  } else {
    console.log("NaN");
  }
  return number;
}

let number = returnTheNextNumber(6);
console.log(number);
