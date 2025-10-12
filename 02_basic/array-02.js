const heroes = ["Thor", "IronMan", "Captain America"];
const dcHeroes = ["Batman", "Flash", "Superman"];

// heroes.push(dcHeroes);

// console.log(heroes);
// console.log(heroes[3][0]);

const allHero = heroes.concat(dcHeroes);
// console.log(allHero);

//concat gives new array after adding two arrays.

const allNewHero = [...heroes,...dcHeroes];
// console.log(allNewHero);

const anArr = [1,2,3,[4,5,6],7,[8,5,3]];

const realArr = anArr.flat(Infinity);

// console.log(realArr);

console.log(Array.isArray("Aayush"));
console.log(Array.from("Aayush"));
// array bnane ke loye #from use kerenge
// console.log(Array.from(nae : 'Aayush')); //intresting we need to tell ki arrat key ya values kis se bnao.

let score1 = 100;
scroe2 = 200;
score3 = 300;

console.log(Array.of(score1,scroe2,score3));