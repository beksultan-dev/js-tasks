// ********** task 1 *************
const userSaleries = {};

userSaleries.Ella = 420;
userSaleries.Sophie = 500;
userSaleries.Ellie = 250;

let ella = userSaleries.Ella;
let ellie = userSaleries.Ellie;

console.log(`1) Зарплата Ella:${ella}, Зарплата Ellie:${ellie}`);


// ********** task 2 *************
const numbers = {
	a: 5,
	b: 6,
	c: 10,
}

let numbersSum = numbers.a + numbers.b + numbers.c;
console.log(`2) Сумма:${numbersSum}`);


// ********** task 3 *************
// let number;
// if(data === true){
//    number = 3;
// } else{
//    number = 5;
// }

let number;
let data = 6;

number = data ? 3 : 5;

console.log(number);