// singleton - constructor se bneag to hmesa singleton bnega. literal se bnega toh uske aur bhi instances honge.

//object literal

// Object.create  //-> singleton
const mySym = Symbol("key1");
const jsUser = {
    name : "Aayush",
    "Full Name" : "Aayush Kumar",
    [mySym] :"myKey1",
    age : 23,
    location : "Gurgaon",
    email: "aayush@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.email = "abc@gmail.com";
// Object.freeze(jsUser);
jsUser.email = "def@gmail.com"
// console.log(jsUser["email"]);
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Greetings From my side");
}

jsUser.greetingTwo = function(){
    console.log(`Greetings From my side ${this["Full Name"]}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());