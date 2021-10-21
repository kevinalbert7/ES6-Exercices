breaklines = () => {
    console.log("")
}

// ------------------------1------------------------//

let fruits = ['Apple','Orange','Banana']
fruits = [...fruits, 'Raspberry']
console.log(fruits)

breaklines()
breaklines()
// ------------------------2------------------------//

fruits = ['Raspberry',...fruits]
console.log(fruits)

breaklines()
breaklines()
// ------------------------3------------------------//

const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']

const arr3 = [...arr1,...arr2]
console.log(arr3)

breaklines()
breaklines()
// ------------------------4------------------------//

const user = {
    age: 10,
    eyes: "vert",
    legs: 2,
    arms: 2,
    hair: "long",
    caracterstique: "gras du bide",
    nose: "petit nez",
    ears: "grandes oreilles",
    glasses: true,
    sosie: "sarkozy"
  }

  let bobby = {
    firstName: "bobby",
    ...user
  }

  console.log(bobby)
breaklines()
breaklines()
// ------------------------5------------------------//

const numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(number => console.log(number)) 

breaklines()
breaklines()
// ------------------------6------------------------//

const modulo = numbers.filter(numbers => numbers % 2 === 0)
console.log(modulo)

breaklines()
breaklines()
// ------------------------7------------------------//

const square = numbers.map(numbers => numbers * numbers)
console.log(square)
breaklines()
breaklines()
