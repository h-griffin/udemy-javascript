// ### ARROW FUNCTIONS ### 


function myFunction(){
    console.log('this is a regular function');
}
myFunction();

const myFunct = () => {
    console.log('this is an arrow funtion stored in const variable')
}
myFunct();


// -arguments-
function printMyNormalName(name){
    console.log(name + ' normal function');
}
printMyNormalName('Griffin');

const printMyArrowName = (name)=>{
    console.log(name + ' arrow function');
}
printMyArrowName('Griffin')

//                  v   v 
const oneArgArrow = name => {
    console.log('one argument does not need ()');
}
oneArgArrow('Griffin')

// funtions that do one thing can be on one line
const multiply = (number)=>{
    return number*2;
}
console.log(multiply(2))

const multiplyOneLine = number => number *2 ;
multiplyOneLine(multiply(2));