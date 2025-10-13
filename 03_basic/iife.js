// Immediately Invoked Function Expressions (IIFE) Global scope ke pollution se bachne ke liye use hota hai ye.


(function chai(){
    console.log(`DB Connected`);
    
})(); //name IIFE

// chai();

( (name) => {
    console.log(`DB Connected ${name}`)
})("Aayush"); //Unnamed IIFE

// JavaScript Execution Context :-
//1. {} Global Execution Context
//JavaScript is single threaded
//2. Function Execution Context
//3. Eval Execution Context

//Memory Creation Phase/Creation Phase
//Execution Phase