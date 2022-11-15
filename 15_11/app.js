const primary_btn = document.querySelector('#primary-btn');
const secondary_btn = document.querySelector('#secondary-btn');
const success_btn = document.querySelector('#success-btn');
const notification = document.querySelector('#notification');
const close_btn = document.querySelector('#close');

const showNotification = ({ className, text }) => {
    notification.classList.remove('d-none');
    notification.classList.add(className);
    close_btn.classList.remove('d-none');
    notification.textContent = text;
}

const deleteClass = ({ className }) => {
    notification.classList.remove(className);
    notification.classList.add('d-none');
    close_btn.classList.add('d-none');
    notification.textContent = '';
}

primary_btn.addEventListener('click', () => {
    showNotification({ className: 'notification-primary', text: 'Notification 1' });

    close_btn.addEventListener('click', () => {
        deleteClass({ className: 'notification-primary' });
    });
})

secondary_btn.addEventListener('click', () => {
    showNotification({ className: 'notification-secondary', text: 'Notification 2' });

    close_btn.addEventListener('click', () => {
        deleteClass({ className: 'notification-secondary' });
    });
})

success_btn.addEventListener('click', () => {
    showNotification({ className: 'notification-success', text: 'Notification 3' });

    close_btn.addEventListener('click', () => {
        deleteClass({ className: 'notification-success' });
    });
})