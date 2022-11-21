const content = document.querySelector('#content');
const buttons = document.querySelectorAll('button');

const styleAttr = [];
const textAttr = [];

buttons.forEach((element) => {
    styleAttr.push(element.dataset.class);
    textAttr.push(element.dataset.show);
})

const showNotification = () => {
    buttons.forEach((element, index) => {
        element.addEventListener('click', () => {
            content.innerHTML = `<div class="myBlock" data-style="${styleAttr[index]}" >${textAttr[index]}<button id="close-btn">x</button></div>`;
            document.querySelector(`#close-btn`).addEventListener('click', () => {
                content.innerHTML = '';
            })
        })
    })
}
showNotification();

const ulBtn = document.querySelector('#ul-btn');
const ulBlock = document.querySelector('ul');

ulBtn.addEventListener('click', () => {
    ulBlock.innerHTML = `<li>пункт <button id="close-btn-li">x</button></li>`;
    document.querySelector('#close-btn-li').addEventListener('click', () => {
        ulBlock.innerHTML = '';
    })
})