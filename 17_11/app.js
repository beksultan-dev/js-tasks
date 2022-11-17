const content = document.querySelector('#content');
const buttons = document.querySelectorAll('button');

const deleteElemAfter = (element) => {
    setTimeout(() => {
        element.remove();
    }, 2000)
}

const showNotification = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            const elem = document.createElement('div');
            elem.innerText = 'Good morning';
            content.append(elem);
            deleteElemAfter(elem);
        })
    }
}
showNotification();


const ulBtn = document.querySelector('#ul-btn');
const ulBlock = document.querySelector('ul');

ulBtn.addEventListener('click', () => {
    const list = document.createElement('li');
    list.innerText = 'пункт';
    ulBlock.append(list);
    deleteElemAfter(list);
})