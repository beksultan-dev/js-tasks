// **************** task 1 ********************
let askQuest = prompt('Столица Кыргызстана?');

// ***************** через тернарный оператор
let result = askQuest === 'Бишкек' ? 'Верно!' : 'Не знаете?';
alert(result);

// ***************** через if else

// if (result === 'Бишкек') {
// 	alert('Верно!')
// } else {
// 	alert('Не знаете?')
// }


// **************** chart ********************
let access = prompt('Кто пришел?');
let pass;

if (access === 'Админ') {
	pass = prompt('Пароль?');
	if (pass === 'Черный Властелин') {
		alert('Добро пожаловать!');
	} else if (pass === null) {
		alert('Вход отменен');
	} else {
		alert('Пароль неверен');
	}
} else if (access === null) {
	alert('Вход отменен');
} else {
	alert('Я вас не знаю');
}