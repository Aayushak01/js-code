const coding = ['js', 'ruby', 'css', 'html', 'node', 'react']

coding.forEach(function (name) {
    // console.log(name);
});

coding.forEach(name => {
// console.log(name);
});

function printMe(name){
    // console.log(name);
    
}

coding.forEach(printMe);

coding.forEach((item, index, arr)=> {
    // console.log(item, index, arr)
});

const myCoding = [
    {
        'name' : 'JavaScript',
        "file" : 'Js'
    },
    {
        'name' : 'python',
        "file" : 'py'
    },
    {
        'name' : 'java',
        "file" : 'Java'
    }
]

myCoding.forEach((item)=>{

console.log(item.name);
})