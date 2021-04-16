// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: "Guess the number" game. 
// 
// - Store a random integer between 1 and 10 in memory; produce a 
//   human-readable output to the JavaScript Console in Chrome showing 
//   the number. 



// - Then, show the number the user entered ("input"). 
// - If the user did not enter a number between 1-10, display an error
//   message. 
// - If the user guessed the number, display "YOU WIN!"
// - If the user did not guess the number, display "SORRY!"

// input is a variable which contains the user's input
let input = prompt(`Enter a number between 1 and 10`)
// console.log(input)

// Write the recipe (algorithm) in the comments. Then, write the code.

// - Store a random integer between 1 and 10 in memory; produce a 
//   human-readable output to the JavaScript Console in Chrome showing 
//   the number. 

let randomNumber = getRandomInt(10)
// Human Output
console.log(`The random number is ${randomNumber}`)
// - Then, show the number the user entered ("input"). 
console.log(`You entered ${input}`)


// if (${randomNumber} == ${input}) {
//   console.log(`It was true!`)
// } else {
//   console.log(`it was false!`)

// }
// - If the user did not enter a number between 1-10, display an error
//   message. 
// if (input <1) {console.log(`Did you read the instructions???`)
// } else if (input > 10) {console.log(`Did you read the instructions???`)
// } else if (input == randomNumber) {console.log(`You win!`)
// } else {console.log(`Sorry :(`)}


// if (input <1 || input > 10) {console.log(`Did you read the instructions???`)
// } else if (input == randomNumber) {console.log(`You win!`)
// } else {console.log(`Sorry :(`)}

let message
if (input <1 || input > 10) {message = `Did you read the instructions???`
} else if (input == randomNumber) {message = `You win!`
} else {message = `Sorry :(`}
console.log(message)