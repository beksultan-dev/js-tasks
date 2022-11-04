// ************** task 1 ****************
function sayHello() {
	return 'Привет, JavaScript';
}
const result = sayHello();
console.log(result);


// ************** task 2 ****************
function showPow(number) {
	console.log(number ** 2);
}
showPow(3);


// ************** task 3 ****************
const userName = 'Василий';

function getName(user = 'Гость') {
	console.log(`Привет, ${user}`);
}
getName(userName);