import takeControlAccordion from './accordion'

const eventsSwiper = new Swiper('.events', {
	slidesPerView: 'auto',
	spaceBetween: 0
})

const partnersSwiper = new Swiper('.partners', {
	slidesPerView: 'auto',
	spaceBetween: 4,

})

const programmsTabsSwiper = new Swiper('.programms__tabs', {
	slidesPerView: 'auto',
	spaceBetween: 44,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
	breakpoints: {
		992: {
			scrollbar: false,
			spaceBetween: 100,
		}
	}
})

// search menu
const searchBtn = document.getElementById('search-btn')
const searchMenu = document.querySelector('.search-menu')
searchBtn.addEventListener('click', () => {
	searchMenu.classList.add('search-menu_active')
})

// burger menu
const burgerBtn = document.getElementById('burger-btn')
const menu = document.querySelector('.menu')
burgerBtn.addEventListener('click', () => {
	menu.classList.add('menu_active')
})

// bottom menu
const VR = document.getElementById('virtual-reality')
const vrMenu = document.getElementById('vr-menu')
const RL = document.getElementById('remote-learning')
const rlMenu = document.getElementById('rl-menu')
const bottomSearchButton = document.getElementById('bottom-search-btn')
const bottomBurgerButton = document.getElementById('bottom-burger-btn')

VR.addEventListener('click', () => {
	rlMenu.classList.remove('service-menu_active')
	searchMenu.classList.remove('search-menu_active')
	menu.classList.remove('menu_active')
	vrMenu.classList.toggle('service-menu_active')
})

RL.addEventListener('click', () => {
	vrMenu.classList.remove('service-menu_active')
	searchMenu.classList.remove('search-menu_active')
	menu.classList.remove('menu_active')
	rlMenu.classList.toggle('service-menu_active')
})

bottomSearchButton.addEventListener('click', () => {
	rlMenu.classList.remove('service-menu_active')
	vrMenu.classList.remove('service-menu_active')
	menu.classList.remove('menu_active')
	searchMenu.classList.toggle('search-menu_active')
})

bottomBurgerButton.addEventListener('click', () => {
	rlMenu.classList.remove('service-menu_active')
	vrMenu.classList.remove('service-menu_active')
	searchMenu.classList.remove('search-menu_active')
	menu.classList.toggle('menu_active')
})

// close all menu
const menuCloseButtons = document.querySelectorAll('.close-btn')
menuCloseButtons.forEach((elem) => {
	elem.addEventListener('click', () => {
		rlMenu.classList.remove('service-menu_active')
		vrMenu.classList.remove('service-menu_active')
		menu.classList.remove('menu_active')
		searchMenu.classList.remove('search-menu_active')
	})
})

// dropdown select
const elSelect = document.getElementsByClassName('select')[0]
const elSelectValue = elSelect.children[0]
const elSelectOptions = elSelect.children[1]

Array.from(elSelectOptions.children).forEach((elOption) => {
	elOption.addEventListener('click', (e) => {
		elSelectValue.textContent = e.target.textContent
		elSelect.classList.remove('isActive')
	})
})

elSelectValue.addEventListener('click', () => {
	elSelect.classList.toggle('isActive')
})

document.addEventListener('click', (e) => {
	const didClickedOutside = !elSelect.contains(e.target)
	if (didClickedOutside) {
		elSelect.classList.remove('isActive')
	}
})

// menu accordeon
takeControlAccordion('.menu__accordion', '.accordion__list', {
	accordionItemSelector: '.accordion__item',
	accordionItemTogglerSelector: '.accordion__toggle',
	accordionItemContentSelector: '.accordion__content',
	accordionItemActiveClass: 'accordion__item_active'
})

const menuToggle = document.querySelector('.accordion__toggle')
const subMenu = document.querySelector('.accordion__content')
menuToggle.addEventListener('mouseover', () => {
	subMenu.classList.add('accordion__content_active')
})

// sub-menu accordeon
takeControlAccordion('.sub-menu', '.sub-menu__list', {
	accordionItemSelector: '.sub-menu__links',
	accordionItemTogglerSelector: '.sub-menu__toggle',
	accordionItemContentSelector: '.sub-menu__content',
	accordionItemActiveClass: 'sub-menu__links_active'
})

const subMenuToggle = document.querySelector('.sub-menu__toggle')
const subMenuContent = document.querySelector('.sub-menu__content')
subMenuToggle.addEventListener('click', () => {
	subMenuContent.classList.toggle('sub-menu__content_active')
})
