//variables
//activiy 1
const name = 'bhen';
const age = 22;
const course = 'BSIT';

console.log(name);
console.log(age);
console.log(course);

//data types
//activity 2
const studentId = "C-2022-0000";
const studentAge = 21;
const isEnrolled = true;

console.log(studentId);
console.log(studentAge);
console.log(isEnrolled);

//Operators
//activity 3
let num1 = 20;
let num2 = 10;

console.log('Addition ' + (num1 + num2));
console.log('Subtraction ' + (num1 - num2));
console.log('Multiplication ' + (num1 * num2));
console.log('Division ' + (num1 / num2));

//Comparison Operator
//activity 4
console.log(20 > 10);//true
console.log(5 < 2);//false
console.log(10 === 10);//true
console.log(10 !== 10);//true

//If statement
//activity 5
let ageStatement = 20;

if (ageStatement >= 18){
    console.log("Adult");
}
else{
    console.log("Minor");
}

//Functions
function hello(name) {
    console.log("world " + name);
}
hello("Hello");

//Function with Return value
function world(name1, name2){
    return "Hello " + name1 + " and " + name2;
}

console.log(world("john", "deo"));

//activity 6
function welcomeStudent(name){
    console.log("Welcome " + name);
}
welcomeStudent("Ben")