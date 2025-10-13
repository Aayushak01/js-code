const user = {
    username : "Aayush",
    price : 999,

    welcomeMsg : function(){
        // console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMsg();
// user.username = "Perfect";
// user.welcomeMsg();

// console.log(this);

// function chai() {
//     let username = "Aayush"
//     // console.log(this);
//     console.log(this.username);
    
// }

// chai();

// const chai =() =>{
    // let username = "aayush"
    // console.log(this.username);
    // console.log(this);
// }

// chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2 ;

// }
// console.log(addTwo(4,5));
// const addTwo = (num1, num2) =>  num1 + num2 
// const addTwo = (num1, num2) =>  (num1 + num2 )

const addTwo = (num1, num2) => ({username : "Aayush"})
console.log(addTwo(4,5));

const myArr = [2,3,5,7];

// myArr.forEach(() => ())