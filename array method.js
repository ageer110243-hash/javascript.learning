const fruits = ["apple", "banana", "orange"]

 
// length 

const arr = [10, 20, 30, 40]
console.log(arr.length)
   


// at 

console.log(arr.at(1))
console.log(arr.at(-1))

// push

arr.push(50)
console.log(arr)

// pop 

arr.pop()
console.log(arr)

// shift

arr.shift()
console.log(arr)

// unshift

arr.unshift(30)
console.log(arr)

// concat

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]
const arr3 = arr1.concat(arr2)
console.log(arr3)

// slice

console.log(arr1.slice(1,))

// toString

console.log(arr1.toString())

// splice
 arr1.splice(2, 0, 45, 50)
 console.log(arr1)

 //Includes

 console.log(arr1.includes(1))

 //reverse

 arr1.reverse();
 console.log(arr1)

 //sort

 arr1.sort()
 console.log(arr1)

 