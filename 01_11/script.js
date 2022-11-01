// *********** task 1 *************
const firstArr = [1, 2, 5, 6, 88, 5];
let sum = 0;
console.log(`Первый Массив: ${firstArr}`);

for (let index of firstArr) {
	sum += index;
}

console.log(`Сумма элементов массива: ${sum}`);


// *********** task 2 *************
const secondArr = [3, 10, 12, 4, 8, 11, 15, 5, 2, 22];
let pow = 0;
let powSum = 0;
console.log(`Второй Массив: ${secondArr}`);

for (let i = 0; i < secondArr.length; i++) {
	pow = secondArr[i] ** 2;
	powSum += pow;
	console.log(`Квадрат элемента: ${secondArr[i]} = ${pow}`);
}

console.log(`Сумма квадратов равна: ${powSum}`);


// *********** task 3 *************
const thirdArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const newArr = [];
console.log(`Третий Массив: ${thirdArr}`);

for (let index of thirdArr) {
	if (index % 2 === 0) {
		newArr.push(index);
	}
}

console.log(`Новый Массив четных чисел: ${newArr}`);