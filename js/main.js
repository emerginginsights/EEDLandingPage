'use strict'

let mainInput = document.querySelector('#main__input');
let mainInputMin = document.querySelector('#main__input-min');
let titleBlock = document.querySelector('.title__block');
let imgBlock = document.querySelector('.img__block');
let wrap = document.querySelector('.wrap');
let mainContent = document.querySelector('.main__content');
let countriesBlock = document.querySelector('.countries__block');
let tipsBlock = document.querySelector('.tips__block');
let tipsBlockMini = document.querySelector('.tips__block__500');
console.log(mainInput.value);

mainInput.addEventListener('focus', () => {
	countriesBlock.classList.add('invisible');
})
mainInput.addEventListener('blur', () => {
	countriesBlock.classList.remove('invisible');
	tipsBlock.classList.add('invisible');
})

mainInputMin.addEventListener('focusin', () => {
	titleBlock.classList.add('invisible');
	imgBlock.classList.add('invisible');
	wrap.classList.add('max-height');
	mainContent.classList.add('section__mt');
});
mainInputMin.addEventListener('focusout', () => {
	titleBlock.classList.remove('invisible');
	imgBlock.classList.remove('invisible');
	wrap.classList.remove('max-height');
	mainContent.classList.remove('section__mt');
	tipsBlockMini.classList.add('invisible');
})

function filterFunction() {
	let filter = mainInput.value.toUpperCase();
	let p = tipsBlock.getElementsByTagName("p");
	tipsBlock.classList.remove('invisible');
    for (let i = 0; i < p.length; i++) {
    	let txtValue = p[i].innerHTML;
    	if (txtValue.toUpperCase().indexOf(filter) > -1) {
      		p[i].classList.remove('invisible');
  		}else {
      		p[i].classList.add('invisible');
    	}
  	}
  	let pArray = [...p];
  	pArray.forEach((item) => {
  		item.addEventListener('mouseover', () => {
  			mainInput.value = item.innerHTML;
  		})
  	})
}


function filterFunctionMini() {
	let filter = mainInputMin.value.toUpperCase();
	let p = tipsBlockMini.getElementsByTagName("p");
	tipsBlockMini.classList.remove('invisible');
    for (let i = 0; i < p.length; i++) {
    	let txtValue = p[i].innerHTML;
    	if (txtValue.toUpperCase().indexOf(filter) > -1) {
      		p[i].classList.remove('invisible');
  		}else {
      		p[i].classList.add('invisible');
    	}
  	}
  	let pArray = [...p];
  	console.log(pArray);
  	pArray.forEach((item) => {
  		item.addEventListener('mouseover', () => {
  			mainInputMin.value = item.innerHTML;
  		})
  	})
}