console.log("Learning Scope")
// let a = 10;
// const b = 20;
// var c = 30;


// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Aayush"

    function two(){
        const website = "Yotutbe"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

// important
addOne(5)
console.log(addOne(5));
 function addOne(value){
    return value + 1
 }
//  console.log(addOne(5));
// addtwo(5)
const addtwo = function(value){
    return value + 2
}

