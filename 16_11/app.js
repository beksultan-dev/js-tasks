const content = document.querySelector('#content');
const buttons = document.querySelectorAll('button');

const deleteElemAfter = (element) => {
    setTimeout(() => {
        element.remove();
    }, 5000)
}

const closeElemByClick = (element) => {
    element.addEventListener('click', () => {
        element.remove();
    })
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        const elem = document.createElement('div');
        elem.className = 'notification';
        elem.id = 'notification';
        elem.innerText = 'Good morning';
        content.append(elem);
        deleteElemAfter(elem);

        const close = document.createElement('button');
        close.className = 'close-btn';
        close.id = 'close-btn';
        close.innerHTML = '&#10008';
        elem.append(close);
        closeElemByClick(elem);
    })
}

// ********** append ************
const text_1 = document.createElement('p');
text_1.id = 'text-1';
text_1.innerText = 'first text with append';
content.append(text_1);

// ********** prepend ************
const text_2 = document.createElement('p');
text_2.id = 'text-2';
text_2.innerText = 'second text with prepend';
content.prepend(text_2);

// ********** before ************
const text_3 = document.createElement('p');
text_3.id = 'text-3';
text_3.innerText = 'third text with before';
content.before(text_3);

// ********** after ************
const text_4 = document.createElement('p');
text_4.id = 'text-4';
text_4.innerText = 'fourth text with after';
content.after(text_4);

// const primary_btn = document.querySelector('#primary-btn');
// const secondary_btn = document.querySelector('#secondary-btn');
// const success_btn = document.querySelector('#success-btn');
// const notification = document.querySelector('#notification');
// const close_btn = document.querySelector('#close-btn');

// const showNotification = (options) => {
//     notification.classList.remove('d-none');
//     notification.classList.add(options.className);

//     const deleteClass = () => {
//         notification.classList.remove(options.className);
//         notification.classList.add('d-none');
//     }

//     close_btn.addEventListener('click', deleteClass);

//     setTimeout(() => deleteClass, 1500)
// }

// primary_btn.addEventListener('click', () => {
//     showNotification({ className: 'notification-primary', text: 'Notification 1' });
// })

// secondary_btn.addEventListener('click', () => {
//     showNotification({ className: 'notification-secondary', text: 'Notification 2' });
// })

// success_btn.addEventListener('click', () => {
//     showNotification({ className: 'notification-success', text: 'Notification 3' });
// })