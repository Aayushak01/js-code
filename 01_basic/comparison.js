console.log(2>1);
console.log(null> 0);
console.log(null == 0);
console.log(null>=0);
let  a = "0";
let x = 0;
console.log(a==x);
console.log(a===x);

/*
#Primitive ;;;;; (Call by Value)
7 types :- String, Number, Boolean, null,undefined,symbol,BigInt

#Non-primitve (Reference Type)
Array, Objects, Functions
*/

const score = 100 

//symbol

const id = Symbol('123');
const idA = Symbol('123');

console.log(id == idA);

//Arrays

const heores = ["Shaktimaan", "Doga", "Iron Man"];
//Objects
let myObj ={
firstName : "aayush",
age : 24,
}

//functions

const myFunction = function(){
    console.log("Hello Aayush");
} 
// data type of above function is Function
//data type of symbol is Symbol.
// data type of obejct is Object.
 console.log(myObj);
 console.log(typeof myObj);