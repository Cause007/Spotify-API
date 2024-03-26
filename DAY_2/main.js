// Continue from yesterday with Control FLow
//The Switch case statement

let day = new Date().getDay();
let literal_day = new Date().toString();
console.log(day)
console.log(literal_day)

//Switch Case statement syntax
switch(day){
    case 0: console.log("Go to church")
    break;
    case 1: console.log("Write code... it's Monday!!")
    break;    
    case 2: console.log("Test code... it's Tuesday!!")
    break;    
    case 3: console.log("Test more code on Wed")
    break;
    case 4: console.log("Write a feature for project on Thurs")
    break;
    case 5: console.log("Testing Feature on Friday")
    break;
    case 6: console.log("Rest on Sat")
    break;
    default: console.log("We don't have a case to handle that")
}

//Literal Day Example with Switch Case Syntax
switch(literal_day.split(" ")[0]){
    case'Sun': console.log('Go to church')
    break;
case'Mon': console.log("Write code...it's Monday!!")
    break;
case'Tue': console.log("Test Code...it's Tuesday!!")
    break;
case 'Wed': console.log("Testing more code on Wed")
    break;
case 'Thu': console.log("Write a feature for project on Thurs")
    break;
case 'Fri': console.log("Testing Feature on Friday")
    break;
case 'Sat': console.log('Rest on Sat')
    break;
default:
    console.log("We don't have a case to handle that")
}

// -- Creation of OBJECTS in JavaScript --
// -- Simple js Object --

let person = {
    name: 'John', 
    age: 28,
    fav_color: 'Red'
}
console.log(person)

//Accessing Data in our Object
console.log(person['name']) //Bracket Notation
console.log(person.fav_color) //Dot Notation

// --Complex js OBJECT
let person2 = {
    name: 'Max',
    age: 31,
    prog_languages: ['Javascript','Python','C++','Java'],
    fav_color: 'Blue',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Bulls','Chicago Sky'],
            soccer: ['Chicago Fire','Naperville Yellowjacks']
        },
        {
            baseball: 'Toronto Bluejays',
            football:'LA Rams',
            basketball:'Milwalkee Bucks',
            soccer: ['Manchester United','Liverpool']
        }
    ]
}

console.log(person2.prog_languages[2])
console.log(person2.teams[1].soccer[0])
console.log(person2['teams'][1]['soccer'][0]) //Bracket Notation

// -- JS OBJECT PROTOTYPE Methods -- Object Literal
console.log(Object.keys(person2))
console.log(Object.values(person2))


//Sad Path of looping through objects in JS
for(let i = 0; i < person2.length; i++){
    console.log(person2[i])
} //DON'T DO THE ABOVE -- did not produce anything on Console

// Happy Path of looping through objects in JS -- looking for keys
for (let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}

console.log('=====================')

// List values from the person2 object that are arrays
for (let i = 0; i < Object.keys(person2).length; i++){
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
}

//Part 2.2
// OBJECT PROTOTYPES -- similar to Class in Python
//self. == this.
//ES5 method syntax

//constructor function
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    //a Method inside of a JS Prototype
    this.printInfo = function(wheels = 0, color){
        console.log(`This is a ${this.year} ${this.make} ${this.model} and has ${wheels} wheels and the color is ${color}.`)
        return 'Returned Value'
    }
}
//Createing an instance of a prototype
let my_car = new Car('Honda','CR-V', 2019)
//Call the prototype method
console.log(my_car.printInfo(4,'Gun Metal'))


//JS CLASSES
class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }

    printInfo(){
        return `Name: ${this.name} \n Age: ${this.age} \n Gender: ${this.gender}`
    }
}

let wilma = new Human('Wilma', 25, 'Female')
//Use printInfo from the newly instantiated wilma (Human) class
console.log(wilma.printInfo())


//JS Inhereitance using Classes
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking
    }

    isBabyWalking() {
        if(this.walking == true){
            return 'Baby is walking!'
        } else {
            return 'Baby is not walking yet'
        }
    }
}

//Create an instantiated value for baby
let caleb = new Baby('Caleb', 1, 'Male', true)
console.log(caleb.printInfo())
console.log(caleb.isBabyWalking())


//Part 2.3
/*
JS CLOSURES
A closure is a self-invoking function that only runs once.
One of the most important parts is that it has private data inside of it.

Closures are also a variable data type.
*/
var outsideNum = 5
var addNums = function () {
    var insideNum = 6;
    return outsideNum + insideNum;
};
console.dir(addNums)

let newAdd = function(outer_var){

    let innerAdd = function (inner_var){
        return outer_var + inner_var;
    };
    return innerAdd;
};

let addFive = new newAdd(5);
let addSix = new newAdd(6)

console.log(addFive(3))
console.dir(addFive)

//another example
let count_up = ( function() {
    let counter = 0; //This will be our private variable
    console.log('Hit');
    return function() {return counter ++}
}) ()

// console.log(count_up())
// console.log(count_up())
// console.log(count_up())
// console.log(count_up())
// console.log(count_up())
// console.log(count_up())
// console.log(count_up())
// console.log(count_up())
// console.log(count_up())

let addNames = ( function () {
    let names = []; //This is the private variable stored
    console.log('Adding Names')
    return function (name) {
        console.log(names)
        return names.push(name)
    }
}) ();

console.log(addNames('Brandon'))
console.log(addNames('Zara'))
console.log(addNames('Janus'))



// Asyncronous JS //
// -- JS Callbacks -- //
/* Simply put: a Callback is a function that is to be executed after another 
function has finished its executions - hence the name callback.

More complex definition: In JS, functions are objects. Because of this,
functions can take other functions as arguments(parameters), and can return functions 
by other functions.

Functions that do this are called "higher - order functions." Any function
that is passed as an argument is called a "Callback function."

So why do we need them?

The reason for this is because of the JS Event Loop. In a nutshell, JS is
an event driven language so this means that instead of waiting for a response before
moving on, JS will keep executing while listening for other events.
*/

//Basic example
function first(){
    console.log(1)
}

function second(){
    console.log(2)
}

first()
second()

//But what if we delay the execution?

function first_delay(){
    //simulate the delay
    setTimeout(function() {
        console.log(1)
    }, 5000)
}

function seciond_delay(){
    console.log(2)
}

first_delay()
seciond_delay()

//Callback function syntax
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework`);
    callback()
}

// doHomework('JavaScript', function() {
//     console.log('Done with Homework')
// })



//JS Promises
const isEvenNumber = (num) => {
    return new Promise( (resolve, reject) => {
        if (num % 2 == 0){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

//Using the JS Promise
isEvenNumber(11)
//Happy path (resolve)
.then(result => {
    console.log(`Even number ${result}`)
})
//Sad reject path
.catch(result => {
    console.log(`Even Number ${result}`)
})

//Another example with Promises - using Async/Await

function increase_salary(base, increase){
    const new_salary = base + increase;
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}

//function to add to the base salary slowly
function slow_addition(n1, n2){
    return new Promise((resolve) => {
        setTimeout(() => resolve(n1 + n2), 2000)
    })
}
// function to add to the base salary slowly
function increase_slow_salary(base, increase){
    const new_salary = slow_addition(base, increase);
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}

async function async_increase_salary(base, increase){
    const new_salary = await slow_addition(base, increase);
    console.log(`The new salary is: ${new_salary}`);
    return new_salary
}

async_increase_salary(50000, 5000)