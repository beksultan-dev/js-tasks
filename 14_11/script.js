// 1) Напишите функцию showNotification(options), которая создаёт уведомление:
// <div class="notification"> с заданным содержимым.
// Уведомление должно автоматически исчезнуть через 1,5 секунды.

// Пример объекта options:
// ? показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
// showNotification({
// html: "Hello!", // HTML-уведомление
// className: "welcome" // дополнительный класс для div (необязательно)
// });

// ************* task ***************
const btns = document.querySelectorAll('.btn');
const notifications = document.querySelector('.notification');

const options = {
	class: 'welcome',
	text: 'Уведомление',
}

const deleteNotification = () => {
	notifications.classList.remove(options.class);
}

const showNotification = (object) => {
	notifications.classList.add(object.class);
	notifications.textContent = object.text;

	setTimeout(deleteNotification, 1500);
}

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', () => {
		showNotification(options);
	})
}