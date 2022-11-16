const primary_btn = document.querySelector('#primary-btn');
const secondary_btn = document.querySelector('#secondary-btn');
const success_btn = document.querySelector('#success-btn');
const notification = document.querySelector('#notification');
const close_btn = document.querySelector('#close-btn');

const content = document.querySelector('#content');
const buttons = document.querySelectorAll('button');
const main = document.querySelector('main');

const deleteElem = (element) => {
    setTimeout(() => {
        element.remove();
    }, 3000)
}

const closeElem = (element) => {
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
        deleteElem(elem);

        const close = document.createElement('button');
        close.className = 'close-btn';
        close.id = 'close-btn';
        close.innerHTML = '&#10008';
        elem.append(close);
        closeElem(elem);
    })
}

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