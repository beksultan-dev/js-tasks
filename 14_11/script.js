// ************* task ***************
const buttons = document.querySelectorAll('.btn');
const notification = document.querySelector('.notification');

const options = {
	class: 'welcome',
	text: 'Уведомление',
}

const showNotification = (obj) => { // принимает обьект 'options'
	notification.classList.add(obj.class); // добавляет класс к элементу 'notification'
	notification.textContent = obj.text; // добавляет текст к элементу 'notification'

	const deleteNotification = () => {
		notification.classList.remove(obj.class); // удаляет класс у элемента 'notification'
	}
	setTimeout(deleteNotification, 1500); // вызывает функцию удаления класса через 1,5 сек
}

const checkButtons = (collection) => { // параметр принимает коллекцию кнопок 'buttons'
	for (let i = 0; i < collection.length; i++) { // перебирает каждый элемент коллекции
		collection[i].addEventListener('click', () => { // добавляет каждому элементу addEventListener
			showNotification(options); // вызов главной функции 'showNotification'
		})
	}
}
checkButtons(buttons); // передает коллекцию кнопок как аргумент