// ---------- VALUES AND VARIABLES
/*
let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN!');
console.log(40 + 8 + 23 - 10);

// values:
console.log("Jonas");
console.log(23);

// variables
let firstname = "Matilda";
// ^ we have just stored a variable
console.log(firstname);
console.log(firstname);
console.log(firstname);

// variable standard: camel case
  // can only name variables with letters, numbers, underscores, or dollar signs
  // cannot use JavaScript reserved keywords (i.e function or new) can use "name" but it's not good to do so
    // so NOT:
      // let jonas-matilda = "JM"
    // INSTEAD:
      let jonas_matilda = "JM"

    // so NOT:
      // let function = 27;
    // INSTEAD:
      let $function = 27;

    // so NOT:
      // let name = "Jonas"
    // INSTEAD:
      let namePerson = "Jonas"

// variables that are all in uppercase are reserved for constants that we know will never change
  let PI = 3.1215;
  // you can even see that VScode knows this convention and marks it as such

// it should be easy to understand what value a variable holds by reading it's variable name
  // so NOT:
    let job1 = 'Barista'
    let job2 = 'Programmer'
  // INSTEAD:
    let myFirstJob = 'Barista'
    let myCurrentJob = 'Programmer'

console.log(myFirstJob);


// ---------- PRACTICE ASSIGNMENTS: VALUES AND VARIABLES

let country = "United States of America";
let continent = "North America";
let population = "333,300,000"

console.log('Country:', country)
console.log('Continent:', continent)
console.log('Population:', population)
*/

// ---------- DATA TYPES
/*
// Objects and Primitives
  // object
    let me = {
      name: 'Ryan'
    }
  // primitive
    let myName = 'Ryan'
    let myAge = 25;


// primitves are basically everything other than objects, there are 7 types.
  //  1. number
  //  2. string
  //  3. boolean
  //  4. undefined
  //  5. null
  //  6. symbol
  //  7. BigInt


// number: floating point number -> always have decimals (even if we don't see or define them)
    let age = 23;
// string: sequence of characters -> used for text, always in a '' or "", otherwise JS will confuse them with variables
    let name = 'Jonas';
// boolean: logical type that can only be TRUE of FALSE -> used for taking decisions
    let fullAge = true;

    // ^^^^ these are the 3 most important ones ^^^^

// undefined: value taken by a variable that is not yet defined, but declared -> ('empty value')
    let children;
// null: also means 'emtpy value' -> different to undefined, will get into this later
// symbol: defined in ES2015 release of JS, a value that is unique and cannot be changes [not useful for now]
// BigInt: defined in ES2020 release of JS, for integers that are too large to be represented by the number type -> basically another type fo numbers

// JS has a feature called "dynamic typing"
    // we DO NOT have to manually define the data type of the bvalue stored in a variable. Instead, data types are determined AUTOMATICALLY
    // in JS it's the VALUE that has a type, not the variable. Variables simply store values that have types.
    // this means we can assign a new value a different datatype within a variable without a problem
      // so variableX can initially be a string, and then later become a number, with no issue



// BOOLEANS

true;
console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

//type of -> special operator that shows the datatype of a value (more on operators soon)
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 25);
console.log(typeof 'Ryan');

// reassigning a variable (use 'let' to declare a new variable, leave it out when reassigning a variable)
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

// error in typeof (this is an error, a bug. this should return null, just as typeof undefined returns undefined. It's a legacy error, so it is kept):
console.log(typeof null)


// ---------- PRACTICE ASSIGNMENTS: DATA TYPES
let country = "United States of America";
let continent = "North America";
let population = "333,300,000"
let isIsland = false;
let language;

console.log("Country:", typeof country);
console.log("Population:", typeof population);
console.log("Language:", typeof language);
console.log("Is it an Island?:", typeof isIsland);
*/


// ---------- LET, CONST, AND VAR
/*
// let an const are newly introduced, var is old

// let "lets" you change the variable's value (in technical terms this is called "reassigning a variable" or "mutating the age variable")
let age = 30;
age = 31;

// const declares variables that are not supposed to change at any point in the future (this is an 'immutable variable')
const birthYear = 1991;
// so we can't now:
// birthYear = 1990;

// it's good practice to use const BY DEFAULT and only use let when you are sure the variable needs to change in the future
    // it's good practice to have as little variable mutation as possible

// VAR SHOULD BE AVOIDED - however older code bases may have it, legacy is why we should learn it

var job = 'barista'
job = 'programmer'

// although it looks like VAR and LET are similar, they are very different (explained later in section 7)

// you don't actually need to declare variables - BAD PRACTICE, TERRIBLE IDEA
lastName = 'Turaids'
console.log(lastName)
      // does something fucked up with something called scope

// ---------- PRACTICE ASSIGNMENTS: LET, CONST, AND VAR
const country = "United States of America";
const continent = "North America";
let population = "333,300,000"
const isIsland = false;
const language = 'English';
*/

// ---------- BASIC OPERATORS 
/*
// operator basically allows us to transform values or combine multiple value, and do all kinds of work with values
    // many different tpes


// mathematical operators:
const now = 2037;
const ageJonas = now - 1991;
const ageRyan = now - 1999;
console.log(ageJonas, ageRyan);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 which is equal to 2 * 2 * 2

// we can use the plus operator to join (or concatenate) strings
    // (will learn in the future a better way to perform teh concatenation of strings)
const firstName = 'Jonas';
const lastName = 'Schedtmann';
console.log(firstName + ' ' + lastName);

// assignment operators:
  // equal sign  
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
// +=, *=m, /= etc adjsuts the current set value
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// comparison operator
console.log(ageJonas > ageRyan);
// >, <, >=, <=
console.log(ageRyan >= 18);

const isFullAge = ageRyan >= 18;

console.log(now - 1991 > now - 1999);

*/
// ---------- PRACTICE ASSIGNMENTS: BASIC OPERATORS
/*
const country = "The United States of America";
const continent = "North America";
let populationUnitedStates = 333300000
const isIsland = false;
const language = 'English';

console.log(populationUnitedStates / 2);
populationUnitedStates++
console.log(populationUnitedStates);

let populationFinland = 6000000
console.log(populationFinland < populationUnitedStates)

let avgPopulation = 33000000
console.log(populationUnitedStates < avgPopulation)

populationUnitedStates--

console.log (country, "is in", continent, "and its", populationUnitedStates, "speak", language)

// better way:

const description1 = 
    country +
    ' is in ' +
    continent +
    ', and its ' +
    populationUnitedStates +
    ' million people speak ' +
    language;

console.log(description1)
// ^ this seems to convert the number to a string
*/

// ---------- ORDER PRECEDENCE
/*
const now = 2037;
const ageJonas = now - 1991;
const ageRyan = now - 1999;

console.log(now - 1991 > now - 1999);


// javascript has a well-defined order of operator precedence


// typcially all the math operators are executed before comparison operators

// mathematical operators almost all exectute from left to right
console.log(25 - 10 - 5); // =10

// assignment is an example of right to left
let x, y;
x = y = 25 - 10 - 5 // x = y = 10, x = 10

console.log(x, y);

// parenthesis of course calculate first
const averageAge = (ageJonas + ageRyan) / 2
console.log(ageJonas, ageRyan)
console.log(averageAge)
*/



// -------------------- CODING CHALLENGE #1
/*
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using this formula:
  // BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meters)
  // 1. Store marks and johns mass and height variables
  // 2. Calculate both their BMIs using the formula (you can even implement both versions)
  // 3. Create a Boolean variable 'markHigherBMI' containing information about whether mark has a higher BMI than John

  // test data:
    // 1. Marks weighs 78kg and is 1.69m tall. John weighs 92kg and is 1.95m tall
    // 1. Marks weighs 95kg and is 1.88m tall. John weighs 85kg and is 1.76m tall

let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

let calcMarkBMI = weightMark / (heightMark ** 2);
let calcJohnBMI = weightJohn / (heightJohn * heightJohn);

console.log(calcMarkBMI, calcJohnBMI);

let markHigherBMI = (calcMarkBMI > calcJohnBMI);

console.log(markHigherBMI);

weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;
calcMarkBMI = weightMark / (heightMark ** 2);
calcJohnBMI = weightJohn / (heightJohn * heightJohn);
markHigherBMI = (calcMarkBMI > calcJohnBMI);

console.log(calcMarkBMI, calcJohnBMI);
console.log(markHigherBMI);
*/

// ---------- STRINGS AND TEMPLATE LITERALS
/*
const firstName = 'Ryan';
const job = 'programmer';
const birthYear = 1999;
// make a string that says "I'm Ryan, a 25 year old programmer!"

// javascript converts numbers to strings to concatenate them
const ryan = "I'm " + firstName + ', a ' + (2024 - birthYear) + ' year old ' + job + '!';
console.log(ryan);

// using template literals we can assemble multiple pieces into a final string, uses `` instead of '' or ""

const ryanNew = `I'm ${firstName}, a ${2024 - birthYear} year old ${job}!`;
console.log(ryanNew)
// we can use `` to write any regular string

console.log(`just a regular string`)
// many developers have started using backticks for ALL strings.
    // there are some reasons not to, particularily communicating where your template literals are

console.log('String with \n\
multiple \n\
lines')

console.log(`String with
multiple
lines`)
*/

// ---------- PRACTICE ASSIGNMENTS: TEMPLATE LITERALS
/*
const country = "The United States of America";
const continent = "North America";
let populationUnitedStates = 333300000
const isIsland = false;
const language = 'English';

console.log(populationUnitedStates / 2);
populationUnitedStates++
console.log(populationUnitedStates);

let populationFinland = 6000000
console.log(populationFinland < populationUnitedStates)

let avgPopulation = 33000000
console.log(populationUnitedStates < avgPopulation)

populationUnitedStates--

console.log (country, "is in", continent, "and its", populationUnitedStates, "speak", language)

// better way:

const description1 = 
    country +
    ' is in ' +
    continent +
    ', and its ' +
    populationUnitedStates +
    ' million people speak ' +
    language;

console.log(description1)

// NEW WORK:

const description2 = `${country} is in ${continent}, and its ${populationUnitedStates} million people speak ${language}.`

console.log(description2)
*/

// ---------- TAKING DECISIONS: IF / ELSE STATEMENTS
/*
const age = 19;
const isOldEnough = age >= 18;

console.log(isOldEnough);


if(age >= 18) {
  console.log('You are old enough to drive!')
} else {
  console.log(`You must wait ${18 - age} years.`)
}

// this if else type of statement is officially called a "control structure" or "if else constrol structure"

const birthYear = 1999;
let century;
if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century)

// ---------- ASSIGNMENT: TAKING DECISIONS: IF / ELSE STATEMENTS
const country = "The United States of America";
const continent = "North America";
const population = 330000000
const language = 'English';
const avgPopulation = 33000000

if(population > avgPopulation) {
  console.log(`${country} has ${population-avgPopulation} more citizens than the average country.`)
} else {
  console.log(`${country} has ${avgPopulation-population} less citizens than the average country.`)
}
*/

// ---------- TYPE CONVERSION AND COERCION
/*
// types are the most fundamental parts of programming
  // we convert strings to booleans or to numbers or visa-versa all the time


  // type conversion is when we manually convert from one type to another

  // type coercion is when JavaScript automatically converts types behind the scenes
    // this happens implicitly, completelely hidden from us

// Type Conversion

const inputYear = '1991';

console.log(inputYear + 18); // = 199118
console.log(Number(inputYear) + 18); // = 2009

console.log(Number('Jonas'));
console.log(typeof NaN);

// NaN is technically a number, it's just not a valid one (not a number)

console.log(String(23));
// white value is a string, purple is a number

// Type Coercion
  // happens when an operator is dealing with 2 values of different types
  // it will convert one value to the type of the other value

console.log('I am ' + 25 + ' years old.');
// the + operator converts numbers to strings, the - operator converts strings to numbers
console.log('23' - '10' - 3);
// * and / operators also convert strings to numbers
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/
// ---------- ASSIGNMENT: TYPE CONVERSION AND COERCION
/*
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 117 NO it's 1143 (the 9 is a num but is being added to a string)
*/

// ---------- TRUTHY AND FASLY VALUES
/*
// falsy: values that aren't necessarily false, but will be false when converted to a boolean
  // 5 falsy values
    // 0, '', undefined, null, NaN (and of course false but it's already false)
console.log(Boolean(0));          // false
console.log(Boolean(undefined));  // false
console.log(Boolean('Ryan'));     // true
console.log(Boolean({}));         // true
console.log(Boolean(''));         // false
  // in practice, the conversion to boolean is almost always implicit, not explicit (meaning type COERCION)
// truthy

let money = 0;

if(money) {
  console.log("Don't spend it all!")
} else {
  console.log('You should get a job.') // money is set to 0, the in if(val), val=falsy
}

// good use case it to check if a variable is undefined or not

let height;

if(height) {
  console.log('Height is defined')
} else {
  console.log('Height is undefined.')
}
// should note that if height = 0 it will remain undefined. Logical operators will fix this. more on them later
*/
// ---------- EQUALITY OPERATORS: == VS ===
/*
const age = 18;
if (age === 18) console.log('You just turned 18!');

  // == is the loose equality operator (it performs type coercion)
    '18' == 18 // true
    '18' == 19 // false

  // === is the strict equality operator (it does not perform type coercion)
    '18' === 18 // false
    '18' === 19 // false


    // when comparing values, avoid using loose equality operators whenever you can
    // loose equality introduces bugs often.
    // when you need type coercion it's often better to convert the values manually
  // DEFAULT TO THE === AND PRETEND == DOESN'T EVEN EXIST

  let favoriteNum = prompt("What is your favorite number? (string)");

  console.log(favoriteNum);
  console.log(typeof favoriteNum);

  if (favoriteNum == 21) { // == here helps convert the string to a num, but we shouldn't use it
    console.log('Nice, 21 is an amazing number.')
  }

  // instead:
  favoriteNum = Number(prompt("What is your favorite number? (number)"));

  if (favoriteNum === 21) { // == here helps convert the string to a num, but we shouldn't use it
    console.log('Nice, 21 is an amazing number.')
  } else if (favoriteNum === 7) {
    console.log('7 is also a cool number.')
  } else {
    console.log("That's not a cool number.")
  }

  if (favoriteNum !== 21) { // !== is the opposite (not equal to), != is the loose version
    console.log('Why not 21?')
  }
*/
// ---------- ASSIGNMENT: EQUALITY OPERATORS: == VS ===
/*
let numNeighbors = Number(prompt('How many neighbors does your country have?'))

if (numNeighbors > 1) {
  console.log('More than 1 border.')
} else if (numNeighbors === 0) {
  console.log('No borders.')
} else if (numNeighbors == 1) {
  console.log ('Only 1 border.')
} //  did this sorta logically backwards but it still works in this instance
*/

// ---------- BOOLEAN LOGIC: THE AND, OR, & NOT OPERATORS
  // boolean logic is a branch of computer science that uses true/false values
  // to solve complex logical problems

  // in order to do this, it uses several logical operators to combine true and false values
  // much like we use arithmatic operators for math

// A: Sarah has a driver's license
// B: Sarah has good vision

// A AND B: Sarah has a driver's license AND good vision

// AND (&& in JS) returns TRUE only if A AND B are BOTH TRUE
  // same with more than 2, ALL need to return TRUE

//  &&  |  A(T) |  B(F) |
//      |---------------|
// A(T) |   T       F   |
// B(F) |   F       F   |

// OR (|| in JS) returns TRUE if JUST ONE of the variables are true
  // same with more than 2, ANY ONE OF THEM needs to return TRUE

//  ||  |  A(T) |  B(F) |
//      |---------------|
// A(T) |   T       T   |
// B(F) |   T       F   |

// NOT (! in JS) acts on 1 boolean value, and inverts it. Simple as that. True becomes false, false becomes true.

/*
let age = 16;

let age1 = age >= 20
let age2 = age < 30

console.log(age1); // false
console.log(age2); // true

console.log(!age1); // true
console.log(!age2); // false

console.log(age1 && age2); // false
console.log(age1 || age2); // true


//NOT operaters have precedence over AND and OR
console.log(!age1 && age2); // true
console.log(age1 || !age2); // false
*/

// ----------- LOGICAL OPERATORS
/*
let hasDriversLicense = true; // A
let hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision) // true
console.log(hasDriversLicense || hasGoodVision) // true

hasDriversLicense = true; // A
hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision) // false
console.log(hasDriversLicense || hasGoodVision) // true

hasDriversLicense = false; // A
hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision) // false
console.log(hasDriversLicense || hasGoodVision) // false

hasDriversLicense = false; // A
hasGoodVision = false; // B

console.log(!hasDriversLicense && hasGoodVision) // false
console.log(!hasDriversLicense || hasGoodVision) // true

hasDriversLicense = false; // A
hasGoodVision = false; // B

console.log(!hasDriversLicense && !hasGoodVision) // true
console.log(!hasDriversLicense || !hasGoodVision) // true

// Logic:
hasDriversLicense = true;
hasGoodVision = true;

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
  console.log('You can drive.')
} else {
  console.log('Someone else should drive.')
}

// we typically create the if condition in the if statement, though:
if (hasDriversLicense && hasGoodVision) {
  console.log('You can drive.')
} else {
  console.log('Someone else should drive.')
}

const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('You can drive.')
} else {
  console.log('Someone else should drive.')
}
*/
// ----------- ASSIGNMENT: LOGICAL OPERATORS
/*
let country = 'The United States of America'
let population = 333300000
let language = 'English'
let isIsland = false

if (population < 50000000 && language === 'English' && !isIsland) {
  console.log(`You should live in ${country}!`)
} else {
  console.log(`${country} does not meet your criteria.`)
}
*/

// ---------- THE SWITCH STATEMENT

// an alternative way of writing a complicated if/else statement when we want to compare one value to multiple different options
/*
const day = 'monday';

// slightly unusual syntax for the switch statement
switch(day) {
  case 'monday': // day === 'monday', if thsi is true then code below
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break; // stops execution of code, removing the break will continue the code down the structure
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day');
} // remember, case performs a STRICT comparison

// version of what's above using if/else

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day');
}
*/

// ---------- ASSIGNMENT: THE SWITCH STATEMENT
/*
const language = 'mandarin';

switch(language) {
  case 'mandarin':
  case 'chinese':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too!')
}
*/
// ---------- STATEMENTS AND EXPRESSIONS
/*
  // this is a high level overview
  
  // an EXPREESION if a PIECE OF CODE that PRODUCES A VALUE
  3 + 4 // is an expression
  1991 // is an expression
  true && false && !false // is an expression

  // a STATEMENT is a bigger piece of code that is executed and does NOT produce a value on itself
    // a statement is kind of like a sentance, and expressions are the words
    // we write our programs as a series of actions made of of statements

    if (23 > 10) {  // if/else STATEMENT
      const str = '23 is bigger'; // '23 is bigger' is an EXPRESSION
    } // but const str = '23 is bigger' is a STATEMENT
    // it is true that the line between statements and expressions can be fuzzy

  // template literals only accept expressions
  console.log(`I'm ${2024 - 1999} years old.`)
  */

// ---------- THE CONDITIONAL (TERNARY) OPERATOR
  // the conditional operator allows us to write something similar to an if/else statement, but all in one line.
/*
const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water.');
// more useful to conditionally test variables

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// harder in if/else because we need to declare the variable outsiden of the statement
let drink2;
if (age >= 18) {
  drink2 = 'wine'
} else {
  drink2 = 'water'
}
console.log(drink2);

// since the ternary operation is an expression, we can use it in a template literal!

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/
// ---------- ASSIGNMENT: THE CONDITIONAL (TERNARY) OPERATOR
/*
const country = 'The United States of America'
const population = 333300000

console.log(`${country}'s population is ${population > 33000000 ? 'above' : 'below'} average.`)
*/

// ---------- JAVASCRIPT RELEASES: ES5, ES6+, AND ESNEXT

// it's really important to know how JS releases work and how to utilize them

// a brief history of JS
  // quickly after the internet was invented, and web browsers were developed, developers wanted the websites to become more interactive
  // they needed a programming language for the browser

  // 1995 - Brendan Eich creates JavaScript (Mocha)
    // Netscape (the predominent browser) hired Brendan to build the very first version of JavaScript, at the time it was called Mocha, but had many of the fundamental features of modern JavaScript
    // he did it in 10 days...
  // 1996 - Renaming of Mocha
    // Mocha changes its name to LiveScript, then to JavaScript, in order to attract Java developers.
    // JavaScript has almost nothing to do with Java
    // Microsoft launches Internet Explorer, they copied JavaScript from Netscape and called it JScript
  // 1997 - Standardizing of JavaScript
    // It's not good to have 2 very similar yet competing languages, so there was a need to standardize one of them. JavaScript was chosen
    // ECMA releases ECMAScript 1 (ES1), the first OFFICAL STANDARD FOR JAVASCRIPT
      // (ECMAScript is the standard, JavaScript is the language in practice, as it's implemented in browsers)
  // 2009 - ES5 release
    // after a lot of complications and arguments about where the language should be headed, ES5 was released with a lof of great new features
  // 2015 - ES6/ES2015 release
    // ES6/ES2015 was released, it was the single biggest update to the language, ever. 
    // Contained a TON of new and exciting features. This was and still is a really big deal for JavaScript and the whole web developer community.

    // ES6 is officially called ES2015. ECMA decided to switch to a yearly release cycle, as opposed to packaging lots of new features up for long periods of time. This helps keep people up to date.
  // 2016 - 2017 - 2018 - etc...
    // ES2016 release, ES2017 release, ES2018 release, etc...

// There is a particularity of JavaScript releases; BACKWARDS COMPATABILITY
  // (don't break the web!!!) - a fundamental principle of JavaScript development.
  // if you were to take some JS code written in 1997 and put it in a modern browser with modern JS engine, it would still work just the same.
  // I'll say it again. Don't break the web!!! There is almost nothing ever removed from the language. Only added.
    // we can't even really call ES5, ES6, ES2017 etc "Versions", instead they are incremental updates.
    // this comes with problems. There are many old bugs and quirks. Remember, brendan made the first version in just 10 days. The initial goal was just to add simple dynamics to websites, not write entire web applications.
    // These quirks give JavaScript a negative reputation among some programmers.
// It's notable that JavaScript is not FORWARDS compatible
  // What do you do when your user might be using an out-of-date web browser?
  // we need to consider 2 distinct scenarios: DEVELOPMENT and PRODUCTION
    // DEVELOPMENT - when you're building the site or application on your computer
      // to ensure you are using the latest JS features, you just need to use the most up-to-date Google Chrome browser
    // PRODUCTION - when you're web application is finished, you deploy it on the internet, and it's running in your user's browsers.
      // This is the part we can't control. This is the part where problems appear.
        // we can't control which browser or which version of that browser our user uses.
        // the solution is to CONVERT modern JS back to ES5 using:
          // Transpiling
          // Polyfilling
        // We will use Babel for these.
// how can different JavaScript releases be used today?
  // ES5 - ready to be used today. Fully supported in all browsers (down to IE 9 from 2011)
  // ES6 - ES20** - ES6+ is well supported in all modern browsers. NOT older browsers. Can use MOST features in production with transpilign and polyfilling
  // ESNext - Future language updates. Some browsers begin implementing new features of JS before they enter the new ECMAScript sepcification
    // this is possible because new features go through 4 stages, at stage 3 browsers can be fairly certain the feature will make it to stage 4, and begin implementing them.

// how versions are taught in this course.
  // modern JS (ES6+) is taught right at the start of this course.
  // ES5 is still going to be touched on. It's very important to understand how it works.
    // old codebases will still be using ES5. Many tutorials and stackoverflow answers online are in ES5. Learning ES5 will help you better understand how JavaScript fundamentally works.