// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// create variable for 212 degrees names boilingPoint
// create function named checkWaterTemp
// create 1 parameter for temp
// create 4 comparative statements for above, below and at boilingPoint, and non numberic inputs.
// return

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

const boilingPoint = 212
const checkWaterTemp = (temp) => {
    if (temp < boilingPoint) {
        return `${temp} is below boiling point`
    } else if (temp > boilingPoint){
        return `${temp} is above boiling point`
    } else if (temp === boilingPoint) {
        return `${temp} is at boiling point`
    } else {
        return "Something is not right"
    }
}
console.log(checkWaterTemp(temperature1))
console.log(checkWaterTemp(temperature2))
console.log(checkWaterTemp(temperature3))
console.log(checkWaterTemp("apple"))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// create variable for the combind arrays using .length named padresRecord
// concatinate both arrays using .concat
// consol.log padresRecord

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const padresRecord = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(`Here are ${padresRecord.length} Padres world series records`)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// create a new variable named mirrorImage to make currentCohort an array
// use .spit to call the fuction to spit the strin
// use .reverse to reverse the string 
// use .join to recombinded the string in the reverse order


const currentCohort = "Bravo 2023"
// Expected output: "3202 ovarB"

const mirrorImage = currentCohort.split('').reverse().join("")
console.log(`Put that thang down flip it and reverse it "${mirrorImage}"`)

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// lastIndexOf for givenValue1
// lastIndexOf for givenValue2

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

const value1 = myNumbers.lastIndexOf(givenValue1)
const value2 = myNumbers.lastIndexOf(givenValue2)

console.log(`The last index of ${givenValue1} is ${value1}`)
console.log(`The last index of ${givenValue2} is ${value2}`)

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// create 2 variables to call the modified variables
// sort sanDiegoSummerTemperatures and sanDiegoWinterTemperatures
// reverse sanDiegoSummerTemperatures and sanDiegoWinterTemperatures
// string interpolate the console.log

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

const tempLog = (array) => array.sort().reverse()

const summerTemps = tempLog(sanDiegoSummerTemperatures)
const winterTemps = tempLog(sanDiegoWinterTemperatures)

console.log(`Summer Temps ${summerTemps} Winter Temps ${winterTemps}`)

