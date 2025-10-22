//reduce

const myNums = [1,2,3,4]

// const total = myNums.reduce(function(acc,curVal) {
//     console.log(`acc : ${acc} and curVal : ${curVal}`);
//     return acc + curVal
// }, 0)

// const total = myNums.reduce((acc,curVal) => acc+curVal , 0)
// console.log(total);


const shoppingcart = [
    {
        itemName : 'JS course',
        price : 2999
    },
    {
        itemName : 'Data Science',
        price : 12999
    },
    {
        itemName : 'Python course',
        price : 999
    },
    {
        itemName : 'Web Dev',
        price : 3999
    }

]

const shoppingTotal = shoppingcart.reduce((arr,item) => {
    return arr + item.price 
}, 0)

console.log(shoppingTotal);
