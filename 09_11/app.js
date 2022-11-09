// ************ task 1 **************
const showAfter = (seconds) => {
	alert(`hello after ${seconds} seconds`);
}
const showInterval1 = setTimeout(showAfter, 4000, 4);
const showInterval2 = setTimeout(showAfter, 8000, 8);


// ************ task 2 **************
let bornYear = prompt('Введите год рождения!')
let currentYear = prompt('Введите текуший год!')

const date = (born, current) => {
	const age = current - born;
	console.log(`Вам ${age} лет`);
}
date(bornYear, currentYear);