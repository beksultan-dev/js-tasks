const btn = document.querySelector('#btn');
const btn_all = document.querySelector('#btn-all');
const myArr = [];

const images = document.querySelectorAll('#images img');

for (let i = 0; i < images.length; i++) {
	images[i].onclick = () => {
		if (images[i].alt) {
			myArr.push(images[i].alt);
		} else {
			console.log('NO ALT');
		}
	}
}

btn_all.onclick = () => {
	console.log(myArr);
}