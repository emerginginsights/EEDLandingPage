'use strict'

let mainInput = document.querySelector('.normal__width');
let mainInputMin = document.querySelector('.width__500');
let titleBlock = document.querySelector('.title__block');
let imgBlock = document.querySelector('.img__block');
let wrap = document.querySelector('.wrap');
let mainContent = document.querySelector('.main__content');
let countriesBlock = document.querySelector('.countries__block');
let tipsBlock = document.querySelector('.tips__block');
let tipsBlockMini = document.querySelector('.tips__block__500');

mainInput.addEventListener('click', () => {
	countriesBlock.classList.toggle('invisible');
	tipsBlock.classList.toggle('invisible');
})



if (window.matchMedia("screen and (min-width: 500px)")){
	mainInputMin.addEventListener('click', () => {
		titleBlock.classList.toggle('invisible');
		imgBlock.classList.toggle('invisible');
		wrap.classList.toggle('max-height');
		mainContent.classList.toggle('section__mt');
		tipsBlockMini.classList.toggle('invisible');
	})
}
