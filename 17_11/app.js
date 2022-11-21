const modal = document.querySelector('#content');
const buttons = document.querySelectorAll('button');
const ulBtn = document.querySelector('#ul-btn');
const ulBlock = document.querySelector('ul');

const styleAttr = [];
const textAttr = [];

buttons.forEach((element) => {
    styleAttr.push(element.dataset.class);
    textAttr.push(element.dataset.show);
})

const showNotification = () => {
    modal.innerHTML = `<div class="myBlock" data-style="${styleAttr[index]}" >${textAttr[index]}<button id="close-btn">x</button></div>`;
    document.querySelector(`#close-btn`).addEventListener('click', () => {
        modal.innerHTML = '';
    })
}

buttons.forEach(element => {
    element.addEventListener('click', () => {
        showNotification();
    })
})

const hideNotification = () => {
    ulBlock.innerHTML = `<li>пункт <button id="close-btn-li">x</button></li>`;
    document.querySelector('#close-btn-li').addEventListener('click', () => {
        ulBlock.innerHTML = '';
    })
}

ulBtn.addEventListener('click', () => {
    hideNotification();
})