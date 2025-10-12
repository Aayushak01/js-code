console.log("Learning date js");

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());

//typeof date is Object.

// let MyCreatedDate = new Date(2023, 0, 23);
// let MyCreatedDate = new Date(2023, 0, 23,5, 3);
let MyCreatedDate = new Date("01-14-2023");
console.log(MyCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(MyCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday : "long",
    day : "2-digit",
    timeZone : "UTC",
})
