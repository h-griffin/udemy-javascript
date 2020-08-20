// extract array elements or object properties and store them in variables

// spread pulls all 
// destructuring pulls one 

//array destructuring
[a,b] = ['haley', 'griffin']
console.log(a) //haley
console.log(b) //griffin

//object destructuring
// {name} = {name:'griffin', age:18} // pulls name, not age
console.log(name) //griffin
console.log(age)  //undefined

//
const number = [1, 2, 3];
[num1, ,num3] = number;
console.log(num1, num3);

