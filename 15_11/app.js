const primary_btn = document.querySelector('#primary-btn');
const secondary_btn = document.querySelector('#secondary-btn');
const success_btn = document.querySelector('#success-btn');
const notification = document.querySelector('#notification');
const close_btn = document.querySelector('#close');

const showNotification = ({ className, text }) => {
    notification.classList.remove('d-none');
    close_btn.classList.remove('d-none');
    notification.classList.add(className);
    notification.textContent = text;

    close_btn.addEventListener('click', () => {
        deleteClass({ className });
    });
}

const deleteClass = ({ className }) => {
    notification.classList.remove(className);
    notification.classList.add('d-none');
    close_btn.classList.add('d-none');
    notification.textContent = '';
}

primary_btn.addEventListener('click', () => {
    showNotification({ className: 'notification-primary', text: 'A simple warning alert - check it out!' });
})

secondary_btn.addEventListener('click', () => {
    showNotification({ className: 'notification-secondary', text: 'A simple danger alert - check it out!' });
})

success_btn.addEventListener('click', () => {
    showNotification({ className: 'notification-success', text: 'A simple info alert - check it out!' });
})