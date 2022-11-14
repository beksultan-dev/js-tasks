// ************* task ***************
const buttons = document.querySelectorAll('.btn');
const notification = document.querySelector('.notification');

const options = {
	class: 'welcome',
	text: 'Уведомление',
}

const showNotification = (obj) => { // принимает обьект 'options'
	notification.classList.add(obj.class);
	notification.textContent = obj.text;

	const deleteNotification = () => {
		notification.classList.remove(obj.class);
	}
	setTimeout(deleteNotification, 1500);
}

const checkButtons = (collection) => { // параметр принимает коллекцию кнопок 'buttons'
	for (let i = 0; i < collection.length; i++) {
		collection[i].addEventListener('click', () => {
			showNotification(options);
		})
	}
}
checkButtons(buttons);