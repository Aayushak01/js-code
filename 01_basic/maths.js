const score = 400;

const balance = new Number(100.0987654);

console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const newNum = 123.8966;

console.log(newNum.toPrecision(6));

const hun = 10000000000;

console.log(hun.toLocaleString('en-IN'));
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);






console.log(Math.PI.toFixed(2));

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.sqrt(9));
console.log(Math.min(4,3,7,9,11));
console.log(Math.max(4,3,6,8,11));

console.log(Math.random());
//values will be between 0 and 1 always
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min + 1)) + min); //important