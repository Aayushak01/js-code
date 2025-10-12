// console.log("Learning Functions");


function myName(){
    console.log("Learning Functions");
    console.log("Learning Js");
}

// myName();

// function addNumber(num1, num2){
//     console.log(num1 + num2);
// }

function addNumber(num1, num2){
    let result = num1 + num2;
    return result;
}

const result = addNumber(5,6);

// console.log("Result: ", result);

function loginUserMessage(userName = "Mr.Perfect") {
    if (userName === undefined) {
        console.log("Please Enter a username")
        return
    } else {
        return `${userName} just logged in`
    }
    
}

// console.log(loginUserMessage("Aayush"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200,400,600))

const user ={
    userName : "AAyush",
    price : 199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and Price is ${anyObject.price}`);
}

handleObject(user);
handleObject({
    userName : "Perfect",
    price : 499
})

const myArr = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArr));
console.log(returnSecondValue([200,4000,600,800,6000]));