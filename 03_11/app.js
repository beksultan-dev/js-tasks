// *********** task 1 ************
const firstArr = [10, 20, 30, 40, 50];
const doubleArr = firstArr.map(item => item * 2);

console.log(`1. Первый массив: ${firstArr}`);
console.log(`1. Удвоенный первый массив: ${doubleArr}`);


// *********** task 2 ************
const myFunc = (elem, count) => {
	const arr = [];
	for (let i = 0; i < count; i++) {
		arr.push(elem);
	}

	console.log(`2. Новый массив: ${arr}`);
	return arr;
}
const newArr1 = myFunc('func', 5);


// *********** task 3 ************
const thirdArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseArr = (array) => {
	const arr = [];
	for (let i = 1; i <= array.length; i++) {
		arr.push(array.at(-i));
	}

	console.log(`3. Обратный массив: ${arr}`);
	return arr;
}
const newArr2 = reverseArr(thirdArr);