// do not edit this section
const cities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur']
const names = []
const numbers = [1, 2, 3]
const colours = ['Red', 'Blue', 'Yellow']
const keys = ['q', 'w', 'e', 'r', 't', 'y']
const countries = ['Bolivia', 'Jordan', 'Greenland']
const fruits = ['Apple', 'Orange', 'Pear']

// TODO: write code to pass the tests

// Edit this code to add 'Fred' to the names array
names.push('Fred')
console.log(names)

// Edit this code to add 4 to the end of the numbers array
numbers.push(4)
console.log(numbers)

// Edit this code to add 'Rio' to the start of the cities array
cities.unshift('Rio')
console.log(cities)
// Use an array method to remove the first item from colours
colours.shift()
console.log(colours)
// Use an array method to remove the last item from keys
keys.pop()
console.log(keys)

// Use an array method to remove 'Jordon' from the countries array
countries.splice(1, 1)
console.log(countries)

// use an array method to remove the last item from the fruits array and store the value in the pear variable
const pear = fruits.pop('Pear')
console.log(pear)

// Do not edit this exported object
module.exports = {
  a: names,
  b: numbers,
  c: cities,
  d: colours,
  e: keys,
  f: countries,
  g: fruits,
  h: pear
}
