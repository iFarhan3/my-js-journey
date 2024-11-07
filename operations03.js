// let value = 5;
// let negValue = -value;

// console.log(negValue);

/*let value2 = -5;
let postivevalue = +value2; 

console.log(postivevalue);
failed*/

//prefix and postfix operators

//prefix operators ++value, they first change value then do the operation

// let score = 5;
// let newScore = ++score;

// console.log(newScore);
// console.log(score);

//postfix operators value++,-- they don't change the value at first

// let nsp = 10;
// let newNsp = nsp++;

// console.log(nsp);
// console.log(newNsp);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// type of memmories
//1. Stack , 2. Heap 

//Stack> Primitive values(string,numbers,boolean etc)
// in stack memmory we get copy of variables, that means it doesn't effect the original var

// let phone = 'Google';
// let otherPhone = phone;
// otherPhone = 'Apple';


// console.log(phone);
// console.log(otherPhone);

//Heap> non-primitive values(object, array, functions)
//in heap memmory, if we change the value of variable it will effect the original value too.

let phone ={
    brand : 'google',
    model : '4xl',
};

let otherPhone = phone;
otherPhone.model = '6pro' 

console.log(phone)
 console.log(otherPhone.model)
//console.log(otherPhone)