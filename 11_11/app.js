const btn_all = document.querySelector('#btn-all');
const images = document.querySelectorAll('#images img');

const myArr = [];

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
