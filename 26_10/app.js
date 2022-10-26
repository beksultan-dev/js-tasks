// ****************** И *******************
let userName = 'Beksultan';
let userAge = 22;

console.log(userName === 'beksultan' && userAge === 22); //false && true
console.log(userName === 'Beksultan' && userAge === 21); //true && false
console.log(userName !== 'Beksultan' && userAge !== 22); //false && false
console.log(userName === 'Beksultan' && userAge === 22); //true && true


// ****************** ИЛИ *******************
let userName2 = 'Alex';
let userAge2 = 33;

console.log(userName2 === 'alex' || userAge2 === 33); //false && true
console.log(userName2 === 'Alex' || userAge2 === 30); //true && false
console.log(userName2 !== 'Alex' || userAge2 !== 33); //false && false
console.log(userName2 === 'Alex' || userAge2 === 33); //true && true


// 1) Переделать этот код так, чтобы в нем были операторы инкремента и декремента:
// let num = 10;
// num = num + 1;
// num = num + 1;
// num = num - 1;
// console.log(num);

let num1 = 10;
num1++;
num1++;
num1--;
console.log(num1);


// 2) Переделайте этот код так, чтобы в нем использовались операторы присвоения:
// let num = 47;
// num = num + 7;
// num = num - 18;
// num = num * 10;
// num = num / 15;
// alert(num);

let num2 = 47;
num2 += 7;
num2 -= 18;
num2 *= 10;
num2 /= 15;
alert(num2);


// 3) 1)Переделайте приведенный код так, чтобы в нем использовались операции 
//   +=, -=, *=, /=, ++, --. 
//   Количество строк кода при этом не должно измениться. 
//   Код для переделки:
//   let num = 1;
//   num = num + 12;
//   num = num - 14;
//   num = num * 5;
//   num = num / 7;
//   num = num + 1;
//   num = num - 1;
//   alert(num);

let num3 = 1;
num3 += 12;
num3 -= 14;
num3 *= 5;
num3 /= 7;
num3++;
num3--;
alert(num3);