// if
const isUserLoggedIn = true;
// if (isUserLoggedIn) {
//     console.log("User is logged in");    
// }else{
//     console.log ("User is logged Out")
// }

// < , > , == , === , =< , => , != , !==, 

const score = 200

// if (score > 100) {
//     const power = "Fly";
//     console.log(`User Power : ${power}`);
// }

// console.log(`User Power : ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test");
// if (balance > 500) console.log("test"), 
// console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750")
// }else if (balance < 900){
//     console.log("less than 900")
// }else {
//     console.log("less than 1200")
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInGoogle = false
const loggedInFromMail = true
if (userLoggedIn && debitCard && 3 === 3) {
    console.log("Shopping Allowed");
}

if (loggedInGoogle || loggedInFromMail) {
    console.log("Logged in from Email or Google"); 
}

const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Any other month");
        break;
}