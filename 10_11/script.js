// ************ task 1 *************
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');

const singapore = () => {
	alert('Singapore Changi Airport Jewel Waterfall without water');
}

const scotland = () => {
	alert('Hiking in the foggy highlands of Scotland');
}

const sauna = () => {
	alert('A-frame tiny home cabin exterior with sauna and hot tub');
}

image1.onclick = singapore;
image2.onclick = scotland;
image3.onclick = sauna;


// ************ task 2 *************
const link1 = document.querySelector('#megacom');
const link2 = document.querySelector('#beeline');
const link3 = document.querySelector('#oshka');

const megacom = () => {
	alert('https://megacom.kg');
}

const beeline = () => {
	alert('https://beeline.kg');
}

const oshka = () => {
	alert('https://o.kg');
}

link1.onmouseover = megacom;
link2.onmouseover = beeline;
link3.onmouseover = oshka;


// ************ task 3 *************
const items = ['string 1', 'string 2', 'string 3'];

function createStr(array) {
	let item = '';
	for (let i = 0; i < arguments.length; i++) {
		item += arguments[i];
	}
	return item;
}

const result = createStr(items);
console.log(result);