// Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello'

let answerOne = true
if (STR_ONE === 'Hello') {
  answerOne = true
  console.log('answerOne', answerOne)
}



// Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye'

let answerTwo = true
if (STR_TWO !== 'Hello') {
  answerTwo = true
  console.log('answerTwo', answerTwo)
}





// Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello'
const STR_FOUR = 'Good'

let answerThree = true

if (STR_THREE.length > STR_FOUR.length) {
  answerThree = true
  console.log('answerThree is', answerThree)

}



// Use a combination of a loop and conditional statements to set answerFour
// to false if STR_FIVE has an odd number of vowels, or true if it has an
// even number
const STR_FIVE = 'Alex'

let answerFour




// Use a combination of a loop and conditional statements to set answerFive
// to false if STR_SIX has an odd number of vowels, or true if it has an
// even number
const STR_SIX = 'Joanna'

let answerFive




// Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla'

let answerSix = ''
if (STR_SEVEN.length !== (STR_SEVEN.length % 2 === 0)) {
  answerSix = STR_SEVEN[Math.floor(STR_SEVEN.length / 2)]
  console.log('answerSix is', answerSix)
}



// Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex'

let answerSeven = ''
if (STR_EIGHT.length % 2 === 0) {
  answerSeven =
    STR_EIGHT[Math.floor(STR_EIGHT.length / 2) - 1] +
    STR_EIGHT[Math.floor(STR_EIGHT.length / 2)]
  console.log('answerSeven is', answerSeven)
}

// Set answerEight to the appropriate season based on what MONTH is set to
//
// For example, if MONTH is 'January', answerEight should be 'Winter'
//
// The below table shows the season for each range of months:
//
// March to May: Spring
// June to August: Summer
// September to November: Autumn
// December to February: Winter
//
// Run the test after changing the value of MONTH to check you've covered every month correctly
const MONTH = 'October'
let answerEight = ''

if (MONTH === 'December' || MONTH === 'January' || MONTH === 'February') {
  answerEight = 'Winter'
  console.log('Winter')
} else if (MONTH === 'March' || MONTH === 'April' || MONTH === 'May') {
  answerEight = 'Spring'
  console.log('Spring')
} else if (MONTH === 'June' || MONTH === 'July' || MONTH === 'August') {
  answerEight = 'Summer'
  console.log('Summer')
} else if (MONTH === 'September' || MONTH === 'October' || MONTH === 'November') {
  answerEight = 'Autumn'
  console.log('Autumn')
}


module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  MONTH,
  answerEight
}
