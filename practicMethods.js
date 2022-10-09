var countries=["india","united states", "united kingdom", "spain","portugal"]
console.log(countries[3]);

console.log("------------------------------------------------------------------------------------------------------------------------------------------")

// repalce element at required position
countries[3]="italy";
console.log(countries)

console.log("------------------------------------------------------------------------------------------------------------------------------------------")

// add element at last
countries.push("japan")
console.log(countries)

console.log("------------------------------------------------------------------------------------------------------------------------------------------")


// removes last element of array
countries.pop()
console.log(countries)

console.log("------------------------------------------------------------------------------------------------------------------------------------------")

//removes first element of array
countries.shift()
console.log(countries)

console.log("------------------------------------------------------------------------------------------------------------------------------------------")

// adds one or more element at the beginning of an array
countries.unshift("india", "canada")
console.log(countries)

console.log("------------------------------------------------------------------------------------------------------------------------------------------")

// remove elements from required position
/* The first digit inside the parentheses is the index position where you want to start adding if you're adding and deleting if you're deleting. 
The second digit is the number of existing elements to remove, starting with the first element that comes after the element(s) that
you're splicing in.*/
countries.splice(1,2)
console.log(countries)

console.log("------------------------------------------------------------------------------------------------------------------------------------------")

// replaces element at desired location 
countries.splice(1,2,"pakistan", "russia","brazil")
console.log(countries)

console.log("------------------------------------------------------------------------------------------------------------------------------------------")

// copying required element in to another array without disturbing original array.
var favcountries = countries.slice(0,3)
console.log("original array:")
console.log(countries)
console.log("clone of the said array:")
console.log(favcountries) 

console.log("------------------------------------------------------------------------------------------------------------------------------------------")


// clone array by Array.from()
console.log("original array:")
console.log(countries)
let countriesTwo = Array.from(countries)
console.log("clone of the said array:")
console.log(countriesTwo)

console.log("------------------------------------------------------------------------------------------------------------------------------------------")

//clone array by map()
console.log("original array:")
console.log(countries)
let clone = countries.map(i =>i);
console.log("clone of the said array:")
console.log(clone)

console.log("------------------------------------------------------------------------------------------------------------------------------------------")

//clone of an array by filter()
console.log("original array:")
console.log(countries)
let cloneFilter = countries.filter(() =>true);
console.log("clone of the said array:")
console.log(cloneFilter)

console.log("------------------------------------------------------------------------------------------------------------------------------------------")

// controlling length of decimal

 var total = 10.2564789

 var total = total.toFixed()

console.log(total)

// current date and time 
 var rightnow = new Date()
 var rightnow = rightnow.toString()
 console.log(rightnow)

 // for the day
 var rightnow = new Date()
 var theDay= rightnow.getDay()
 console.log(theDay)


 
