// basics of JavaScript

/*
Hey mom, look at my multiline comment!
Let's put is on the fridge.
Primitive data types in JS: strings, integers, Booleans, floats, arrays, objects (very similar to Python dictionaries)
*/

// String variables

var first_name = 'Zack';

//display the value in JS
console.log(first_name)

// Assign an integer
var some_number = 32;
//semicolon sometimes needed, other times not; best practice to add ; after each line
console.log(some_number)

// show all attributes of a document or id
console.dir(document)
// document refers to whatever file the JS is being used in, in this case our index.html
// in console, open up the #document to see all sorts of JS commands

// Floats
var some_float = 3.141592
console.log(some_float)

// array
var some_array = [1,2,3,4]
console.log(some_array)

// object (like a dictionary)
var some_object = {'yee' : 'haw'}
console.log(some_object)

//javascript hoisting
//JS goes line by line; hoisting will backtrack 
a_num = 10
console.log(a_num)
var a_num
console.log(a_num)

console.log(some_random_variable) //still runs but returns 'undefined' which is basically a None type; not good practice
var some_random_variable = 'This is a random variable'
console.log(some_random_variable) //corrected order

//a better way of declaring a variable is by using 'let' or 'const' keywords

let x;
console.log(x)
x = 3
console.log(x)

const y=5;
console.log(y)
// y = 6
// console.log(y) CAUSES ERROR, const cannot be overwritten


// VIDEO BREAK 1

// BASIC MATH OPERATIONS

let sum = 5 + 5
console.log(sum)

let diff = 5 - 4
console.log(diff)
let diff_1 = 5
let diff_2 = 3
console.log(diff_1 - diff_2)

//multiplication, division, exponents same as python

let find_floor = Math.floor(5.8) 
console.log(find_floor)
//alternatively Math.ceil(n) rounds up = 6

let crazy_stuff = some_float + '4'
console.log(crazy_stuff) //just added a 4 at the end of the number

let crazy_stuff_2 = some_float + parseFloat('4')
console.log(crazy_stuff_2)

//Redeclaration of variables
var red_ranger = 'Jason'
var red_ranger = 'Tommy'
console.log(red_ranger)

let nba_goat = 'Michael Jordan'
console.log(nba_goat)

nba_goat = 'Kobe' //Don't retyle let on later variable changes
console.log(nba_goat)


//Regular named functions
//multiple ways to write functions:
function addNums() {
    let num = 4;
    let num2 = 5;

    return num + num2
} //indentation not important but IS PROPER. Brackets define start/stop of function.
console.log(addNums())

//alternate way to write
let addNums2 = function(num, num2){
    return num + num2
}
console.log(addNums2(6,7))

//alternate 2 (very common)
//ES6+ Arrow function in JavaScript
// Our first example shows how to use a single parameter in an arrow function without parentheses
// This can only be done with one parameter if you don't want to use parentheses

let cubed = num => {
    return num**3
} //this only works with one variable, otherwise use parentheses around variable (see next)
console.log(cubed(4))

let toThePower = (num, power) => {
    return num**power
} //parentheses around multiple variables, OR NO VARIABLES let toThePower = () => {return 5}
console.log(toThePower(4,3))


//direct to console function
console.log((function(name){
    let hello = 'Hello ' + name;
    return hello
})('Joel'))


//Control Flow
//if statements
function determineAge(age) {
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age < 65){
        return 'Adult'
    } else {
        return 'Senior'
    }
}
console.log(determineAge(15))

//Ternary Operators
function determineAge2(age){
    return(age < 18) ? 'Minor' : (age >=18 && age <= 65) ? 'Adult not retired' : 'Elderly person not retired'
}
console.log(determineAge2(67))
console.log(determineAge2(11))


//LOOOOOPS
function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    } 
    return 'Counting has stopped'
    //i++ shorthand for i+1
}
console.log(countByOne())

function decreaseByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Counting has ended'
}
console.log(decreaseByOne())

function count_with_while(){
    let i = 0;
    let text = '';
    while(i < 10){
        text += `this number is... ${i} \n`;
        i++;
    };
    return text;
}
console.log(count_with_while())

//NEW LOOOOOP
//DO WHILE loop will loop AT LEAST ONE TIME even if False

function countWithDoWhile(){
    let i = 0;
    let text = '';

    do{
        text += `this number is... ${i} \n`;
        i++;
    }
    while(i > 10) //this is false, so loop will only run 1 time
    return text
}
console.log(countWithDoWhile())

//create array
let group_of_names = ['jerry','ben','bAsh','Brock','Misty']

//Index the first position
console.log(group_of_names[0])

let terry, ben, misty;
[terry, misty, ben] = group_of_names
console.log(terry, ben, misty)
console.log(group_of_names)
console.log(ben)

//Method 1 for looping through an array
function showAllNames(){
    for(let i = 0; i < group_of_names.length; i++){
    console.log(group_of_names[i])
    }
    return 'done'
}
console.log(showAllNames())

//Method 2
console.log(group_of_names.forEach(element => console.log(element)))

//JS Array method: array.toString()
console.log(group_of_names.toString())
console.log(typeof(group_of_names.toString()))

//More methods: map, filter, reduce

// .map()
let b_names = group_of_names.map( i => {
    if (i[0] == 'B'){
        return i
    } else {
        return false
    }
})
console.log(b_names) //returns a map object; the next version returns a list

// long form of .map()
let b_names_test = function (){
    let test_array = [];
    for(let i = 0; i < group_of_names.length; i++){
        if(group_of_names[i][0] == 'B'){
            test_array.push(group_of_names[i])
        } 
    }
    return test_array
}

console.log(b_names_test())


// .filter()
let long_names = group_of_names.filter( element => element.length > 4)
console.log(long_names)

// .reduce()
const nums = [2,4,6,8,10]
let nums_reduced = nums.reduce( (accumulator, current_num) => {
    return accumulator + current_num
})
console.log(nums_reduced)

// .join, .slice, .search, .splice also work; google documentation





