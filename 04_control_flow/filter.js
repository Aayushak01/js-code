// const coding = ['js', 'ruby', 'css', 'html', 'node', 'react']

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// foreach doesn't return anything
// console.log(values);

const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = numbers.filter((num)=> {
// // console.log(num > 4);
// return num > 4;
// })
// console.log(newNums);

// const newNums = [];

// numbers.forEach( (num) =>{
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {
        title : 'Book one',
        genre : 'Fiction',
        publish : 1981,
        edition : 2004
    },
    {
        title : 'Book two',
        genre : 'Non-Fiction',
        publish : 1985,
        edition : 2008
    },
    {
        title : 'Book three',
        genre : 'History',
        publish : 1984,
        edition : 2014
    },
    {
        title : 'Book four',
        genre : 'Sports',
        publish : 1989,
        edition : 2009
    },
    {
        title : 'Book five',
        genre : 'Science',
        publish : 1991,
        edition : 2010
    },
    {
        title : 'Book six',
        genre : 'History',
        publish : 2001,
        edition : 2004
    },
    {
        title : 'Book Seven',
        genre : 'Fiction',
        publish : 1981,
        edition : 2000
    }
]

const userBooks = books.filter((bk) => bk.genre === 'History')
// console.log(userBooks);

const userBooks2 = books.filter ((bk) => { 
    return bk.publish >= 1985 && bk.genre === 'Sports' && bk.edition >= 2009
})
console.log(userBooks2);

