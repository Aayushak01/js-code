console.log(`Learnig Array loops`);

//for of

// ['', '', '','']
// [{},{},{}]

const arr = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for (const num of arr) {
    // console.log(num);
}

const str = "Hello World!"

for (const greets of str) {
    // console.log(`Each char is ${greets}`);
    
}

//Maps 
const map = new Map();
map.set('In', 91)
map.set('USA', 971)
map.set('FR', '01')
map.set('In', 91)

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);  
// }

const myObj = {
    'game1' : 'NFS',
    'game2' : 'GTA',
    'game3' : 'BGMI'
}

// for (const [key, value] of myObj) {
    // console.log(key, ':-', value);
// } //not working as it is not iteratable for this type of forof

const myObj2 ={
    'js' : 'Javascript',
    'cpp' : 'C++',
    'rb' : 'ruby',
    'swift' : "Swift by Apple"
}

for (const key in myObj2) {
    // console.log(`${key} shortcut is for ${myObj2[key]}`);
    
}

const programming = ['js', 'cpp', 'rb', 'swift']

for (const key in programming) {
    // console.log(programming[key]);   
}

for (const key in map) {
    // console.log(key);  

}

