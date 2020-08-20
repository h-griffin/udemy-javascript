// ### CLASSES ###

// blueprints for objects 

// -- ES6 SYNTAX -- 

class People{
    name = 'Griffin' //property
    call=()=>{console.log('call: method of person')} //method
}
// property = attribute/value/variable of class
// method   = function assigned to class

// class is like a constructor function
const people = new People()
people.call()
console.log(People.name)

// -inheritance-
class Human{
    constructor(){
        this.gender = 'female';
        this.changeableHair = 'blonde'       
    }
    printGender(){
        console.log(this.gender)
    }
    printChangeableHair(){
        console.log(this.changeableHair)
    }
}

// person gets everything from human
class Person extends Human{
    constructor(){
        super();   // init - human constructor
        this.name = 'griffin';
        this.changeableHair = 'brunette'    // changes default human constructor
    }

    printMyName(){
        console.log(this.name);
    }
}
const person = new Person();
person.printMyName();           // given at person
person.printGender();           // uses default human
person.printChangeableHair();   // person changed default human



// -- ES7 SYNTAX -- 
class Human7{
    // no longer needs constructor()
    gender = 'female';
    changeableHair = 'blonde'       
    
    printGender=()=>{
        console.log(this.gender)    // still needs this. to reference
    }
    printChangeableHair=()=>{
        console.log(this.changeableHair)
    }
}

class Person7 extends Human7{ 
    // no super constructor so no super()
    name = 'griffin';
    changeableHair = 'brunette'   

    printMyName=()=>{
        console.log(this.name);
    }
}
const person7 = new Person7();
person7.printMyName();           // given at person
person7.printGender();           // uses default human
person7.printChangeableHair();   // person changed default human
