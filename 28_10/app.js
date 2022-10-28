// *********** task 1 ************
const x = Number(prompt('1) Введите значение переменной x'));
console.log(`1) Переменная x:${x}`);

if (x === 7) {
	console.log('Верно');
} else if (typeof x !== 'number') {
	console.log('Введите число!');
} else if (x !== 7) {
	console.log('Неверно');
}


// *********** task 2 ************
const a = Number(prompt('2) Введите значение переменной a'));
const b = Number(prompt('2) Введите значение переменной b'));
console.log(`2) Переменная a:${a}, Переменная b:${b}`);

if (a <= 1 && b >= 3) {
	let plus = a + b;
	console.log(`Результат сложения:${plus}`);
} else {
	let minus = a - b;
	console.log(`Результат вычитания:${minus}`);
}


// *********** task 3 ************
const time = Number(prompt('3) Укажите время от 0 до 59'));
console.log(`3) Переменная time:${time}`);

if (time >= 0 && time < 15) {
	console.log('Переменная "time" попадает в первую четверть');
} else if (time >= 15 && time < 30) {
	console.log('Переменная "time" попадает во вторую четверть');
} else if (time >= 30 && time < 45) {
	console.log('Переменная "time" попадает в третью четверть');
} else if (time >= 45 && time < 60) {
	console.log('Переменная "time" попадает в четвертую четверть');
} else {
	console.log('Значение не попадает в диапазон от 0 до 59');
}