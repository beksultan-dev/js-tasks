const buttons = document.querySelectorAll('.btn');
const modalContainer = document.querySelector('#content');

const showNotification = (options) => {
    modalContainer.innerHTML = `<div class="modal-bg" id="modal-bg">
        <div class="modal-container ${options.className}" id="modal-container">
            <div class="modal-top">
                <div class="modal-top-text">${options.text}</div>
                <span class="close-icon" id="close-icon"></span>
            </div>
            <div class="hr"></div>
            <div class="modal-mid">
                <div class="modal-mid-text">I will not close if you click outside of me. Don't even try to press escape key.</div>
            </div>
            <div class="hr"></div>
            <div class="modal-bot">
                <button class="close-modal" id="close-modal">Close</button>
                <button>Understood</button>
            </div>
        </div>
    </div>`;

    const closeModal = document.querySelector('#close-modal');
    const closeIcon = document.querySelector('#close-icon');

    addEventToCloseElem(closeModal);
    addEventToCloseElem(closeIcon);
}

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        showNotification({
            className: item.dataset.class,
            text: item.dataset.text
        })
    })
})

const addEventToCloseElem = (close_item) => {
    close_item.addEventListener('click', () => {
        modalContainer.innerHTML = '';
    })
}