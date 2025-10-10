//Stack (Primitive), Heap(non-primitve)

let myName = "Aayush";
let lastName = myName;

lastName = "Upadhyay"

console.log(myName);
console.log(lastName);

let userOne = {
    email: "aayush@gmail.com",
    pwd: "123abc",
}

let userTwo = userOne;

userTwo.email = "upadhyay@gmail.com"
// dono user ki email change ho jayegi. Update original value me hoti hai

// stack me copy milti hai isliye original value me change nahi hoti hai.

console.log(userOne.email);
console.log(userTwo.email);