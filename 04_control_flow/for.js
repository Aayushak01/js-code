console.log("Learning For Loop In JS")

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
    // console.log(`This is ${element} number`);
}

for (let index = 0; index <= 10; index++) {
    for (let j = 1; j <= 10; j++) {
        const element2 = j;
        // console.log(`This is ${element2} element 2`);
        // console.log(index + ' * ' + j + " = " + index*j);
        
        
    }
    const element = index;
    // console.log(`this is an ${element} element number`);
    
    
}

let myArr = ['Flash', 'Batman', 'Superman']

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}
// console.log(myArr.length);


// break and continue

for (let index = 1; index <= 20; index++) {
    const element = index;
    if (index == 5 || index == 8){
        console.log(`Detected 5 or 8`);
        // break;
        continue
    }else {
        console.log(`Value of i is ${element}`);
    }
    // console.log(`Value of i is ${element}`);
    
}