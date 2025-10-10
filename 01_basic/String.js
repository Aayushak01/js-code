const myName = "Aayush";

const age = 24;

console.log(myName + " is " + age + " old" );

console.log( `My name is ${myName} and my age is ${age}.`);

const gameName = new String('MrPerfect-01');

console.log(gameName);
console.log(gameName[3]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,9);
console.log(newString);

const anotherString = gameName.slice(-8, 11);
console.log(anotherString);

const gapString = "      aayush       ";
console.log(gapString);
console.log(gapString.trim());

const gameName2 = new String('MrPerfect-01');
 console.log(gameName2.split('-'));
