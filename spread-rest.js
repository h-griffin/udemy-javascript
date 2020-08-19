// ### SPREAD AND REST OPERATORS ###

// ...

// same operator different w how you use it


// - SPREAD -
// used to split up array elements OR object properties

// grab all from old and add to new and add 3, 4
oldArray = [1, 2]
const newArray = [...oldArray, 3, 4]            // add 3, 4

oldObject={
    oldProperty:4
}
const newObject = {...oldObject, newProperty:5} // add prop:5

// - REST -
// used to merge a list of function arguments into an array

// unlimited arguments  v  into array to use array methods on arguments
function sortArgs(...args){
    return args.sort() // < array method
}



// spread array
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);


// spread object
const person ={
    name:'griffin'
};
const newPerson ={
    ...person,
    age:18,
}

console.log(newPerson)


// rest function
const filter = (...args)=>{
    return args.filter(el => el === 1); //filter bool if arg element is 1
}

console.log(filter(1,2,3));