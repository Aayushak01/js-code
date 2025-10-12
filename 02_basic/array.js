const myArr = [124, 1, 2 , 3, 4, 5];

// console.log(myArr[0]);
// console.log(myArr.length);

//Array Methods

// myArr.push(8);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(0);
// myArr.shift();
//don't use as it will need to shift all the items of the array.
// console.log(myArr);

// const newArr = myArr.join();

// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1,3);
console.log("C ", myArr)
console.log(myn2);



