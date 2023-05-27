'use strict'


new WOW().init();


/* =================================================== Статус бар прокрутки страницы*/
let fullHeight, innerHeight;
const progressBar = document.querySelector('.progressbar>.progressbar-line');

window.addEventListener('scroll', fillProgressLine);
window.addEventListener('resize', fillProgressLine);

function fillProgressLine() {
    fullHeight = document.body.scrollHeight;
    innerHeight = window.innerHeight;
    progressBar.style.width = (pageYOffset * 100 / (fullHeight - innerHeight)) + '%';
}

fillProgressLine();


window.addEventListener('scroll', function () {
  const element = document.querySelector('.progressbar-line');
  const scrollHeight = document.body.scrollHeight;
  const currentScroll = window.pageYOffset + window.innerHeight + 400;
  if (currentScroll >= scrollHeight) {
    element.classList.add('go-up');
	
  }

   if (currentScroll <= scrollHeight) {
    element.classList.remove('go-up');
	
  }
  console.log(scrollHeight);
  console.log(currentScroll);

  console.log(innerHeight);


  
});




/* =========================================================== Добавление номерации для елементов меню */
function addNumForMenu() {
	const numBlock = document.querySelectorAll('.main-menu__number');

	for (let i = 0; i < numBlock.length; i++) {
		numBlock[i].innerHTML = `0${i+1}`;
	}
}


/* =========================================================== Вывод попапа */
const btns = document.querySelectorAll('[data-btn-form]'),
	popupForm = document.querySelector('.popup-contact-form'),
	closePopup = document.querySelector('.popup-contact-form__close');

toggleBlocks (btns, popupForm, closePopup, 'popup-contact-form_active')


/* =========================================================== Показ меню*/
const menuPopup = document.querySelector('.menu'),
		menuPopupClose = document.querySelector('.menu__close'),
		mainMenuHumberger = document.querySelectorAll('.header__humburger'),
		mainMemuLinks = document.querySelectorAll('.main-menu__item');

toggleBlocks (mainMenuHumberger, menuPopup, menuPopupClose, 'menu_active', mainMemuLinks)


/* =========================================================== Функция - Показ-скрытие блоков*/
function toggleBlocks (triger, popup, popupClose, active, insideItems) {

	triger.forEach(function(item) {
		item.addEventListener('click', function() {
			popup.classList.toggle(active);
			document.body.overflow = 'hidden'
	
		})
	})

	popupClose.addEventListener('click', function() {
		popup.classList.remove(active);
		document.body.overflow = ''
	});

	if (insideItems) {
		insideItems.forEach(function (item) {
			item.addEventListener('click', function () {
				popup.classList.remove(active);
				document.body.overflow = ''
			})
		})

	}

	

	addNumForMenu()
}



/* =========================================================== Переключатель языка */
function changeLeng() {
	const lengItems = document.querySelectorAll('.menu__leng-name');


	function hideActive() {
		lengItems.forEach(item => {
			item.classList.remove('menu__leng-name_active')
		});
	}

	hideActive();

	function addActive(i = 0) {
		lengItems[i].classList.add('menu__leng-name_active')
	}

	addActive();

	lengItems.forEach( (item, i) => {
		item.addEventListener('click', function() {
			hideActive();
			addActive(i);
		})
	})
}
changeLeng()


/* ===================================Добавление анимации для картинок блока main-text-block */

const textBlockImg = document.querySelectorAll('.main-text-block img');

if (textBlockImg.length > 0) {
	textBlockImg.forEach(function(item) {
		item.classList.add('wow')
		item.classList.add('fadeInUp')
	})

}







/* =========================================================== слайдер*/
$(document).ready(function(){
	
		$('.customers-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true
			
		});
		new WOW().init();
	});




