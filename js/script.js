"use strict"

// document.addEventListener('DOMContentLoaded', function () { //проверка док-т уже загружен

// };

$(document).ready(function () {
	$('#service01').click(function (event) {
		$('#service01').toggleClass('service-my__active')
	});
});
$(document).ready(function () {
	$('#service02').click(function (event) {
		$('#service02').toggleClass('service-my__active')
	});
});
$(document).ready(function () {
	$('#service03').click(function (event) {
		$('#service03').toggleClass('service-my__active')
	});
});
$(document).ready(function () {
	$('#service04').click(function (event) {
		$('#service04').toggleClass('service-my__active')
	});
});


const tabItem = document.querySelectorAll('.tabs__btn-item');   //найдем все кнопки
const tabContent = document.querySelectorAll('.tabs__content-item');


tabItem.forEach(function (element) {           //циклом по всем табам
	element.addEventListener('click', open);           //а на какой нажали отработает функция опен


})

function open(evt) {                         //описываем функц
	const tabTaraget = evt.currentTarget;     //отслеживаем  по ip
	const button = tabTaraget.dataset.button;  // используем значение (data-buton = content-1)


	tabItem.forEach(function (item) {
		item.classList.remove('tabs__btn-item--active')   //убераем класс
		tabTaraget.classList.add('tabs__btn-item--active') //добавляем

	});



	tabContent.forEach(function (item) {
		item.classList.remove('tabs__content-item--active')   //убераем класс

	});

	document.querySelector(`#${button}`).classList.add('tabs__content-item--active');  //#-id  $-data-buton



}
/////Инициализируем слайдер

const swiper = new Swiper(".image-slider", {
	//стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
	},

	slidesPerView: 3,
	spaceBetween: 24,
	loop: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		700: {
			slidesPerView: 2,
		},
		1060: {
			slidesPerView: 3,
		}
	},
});

const swipertwo = new Swiper(".image-slidertwo", {
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination-two',
		clickable: true,

		type: 'fraction',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
});