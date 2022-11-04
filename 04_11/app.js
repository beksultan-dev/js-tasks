// ********** task 1 ***********
const inputNumber = () => {
	return prompt('Введите число!');
}

const checkNumber = (number) => {
	if (number > 0) {
		return 'плюс';
	} else if (number < 0) {
		return 'минус';
	} else {
		return;
	}
}

let result = '';

for (let i = 0; i < 1; i++) {
	let firstNumber = Number(inputNumber());
	let firstNumberResult = checkNumber(firstNumber);

	if (firstNumberResult === 'плюс') {
		result += `${firstNumberResult} `;
		i--;
		console.log(result);
	} else if (firstNumberResult === 'минус') {
		result += `${firstNumberResult} `;
		i--;
		console.log(result);
	}
}


// ********** task 2 ***********
const numbersArr = [-5, 10, 5, 55, -1, 22, -4, 36, -45];
const negativeNumbers = numbersArr.filter((item) => {
	if (item < 0) {
		return item;
	}
})

console.log(negativeNumbers);


// ********** task 3 ***********
function compareNumbersExpression(first, second) {
	if (first > second) {
		return 1;
	} else if (first < second) {
		return -1;
	} else if (first == second) {
		return 0;
	}
}

const compareNumbersArrow = (first, second) => {
	return first > second ? 1 : -1;
}

const compareResult = compareNumbersExpression(5, 7);
console.log(compareResult);