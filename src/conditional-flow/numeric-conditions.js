// TODO: Implement the functions below to make the tests pass

const ARRAY_ONE = []
const ARRAY_TWO = ['Hello', 'Conditions']

// Use conditional statements to set answerOne to false if ARRAY_ONE is not empty
// or true if it is empty

let answerOne = true
if (ARRAY_ONE) {
  answerOne = true
} else {
  answerOne = false
}

// Use conditional statements to set answerTwo to false if ARRAY_TWO is not empty
// or true if it is empty
let answerTwo

if (ARRAY_TWO) {
  answerTwo = false
} else {
  answerTwo = true
}


const NUM_ONE = 92837
const NUM_TWO = 92827

// Use conditional statements to set answerThree to true if NUM_ONE is more than NUM_TWO
let answerThree

if (NUM_ONE > NUM_TWO) {
  answerThree = true
  console.log('check is answerThree is', answerThree)
} else {
  answerThree = false
  console.log('check is answerThree is', answerThree)
}



const NUMBERS = [67, 2039, 17, 501, 98, 139, 21]

// Use a combination of a loop and conditional statements to set answerFour
// to the lowest number in the NUMBERS array
let answerFour = NUMBERS[0]
for (let i = 0; i < NUMBERS.length; i++) {
  if (NUMBERS[i] < answerFour) {
    answerFour = NUMBERS[i]
  }
}
console.log(answerFour)



// Don't edit the code below this line
module.exports = {
    answerOne,
    answerTwo,
    answerThree,
    answerFour
}
