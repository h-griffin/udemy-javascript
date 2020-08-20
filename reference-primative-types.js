
// primative - num str bool
// reassign or store in new variable will 'copy value' (pointer)
const number = 1;
const num2 = number;

console.log(num2);



const person = {
    name:'griffin'
};
const secondPerson = person;

console.log(secondPerson); // receives griffin from person

// pointer is copied, person is stored in memory 

const person2 = {
    name:'griffin'
};
const secondPerson2 = person2;

person2.name = 'haley';

console.log(secondPerson2); // pointer still pointing to person


// real copy 

const originalPerson = {
    name:'griffin'
};

const copiedPerson = {
    ...person
};

originalPerson.name = 'haley';
console.log(copiedPerson)
