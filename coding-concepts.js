// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The correct answer is 10. With a 0 index LEARN is a 5 character word + the space + the 4 characters in 2023 = 10

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: the correct answer is o but to javascript being 0 indexed meaning that the first position is 0 and counting over from there that would put "o" in the 4th index

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: The correct answer is "Ruby" because it is located in the 1 index position.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY, SUNDAY"
// b) Verify and explain: The correct answer is Error because toUpperCase is not a function. toUpperCase applies to a string not an array.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: Undefind 4
// b) Verify and explain: The correct answer is "number". typeof checks the type of data being returned and since 4 is a number typeof will tell us it is returning a "number"
