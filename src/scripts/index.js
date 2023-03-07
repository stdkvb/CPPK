import { takeControlAccordion, takeControlModals } from './takeControl'

takeControlModals('.open-modal', '.modal-close', {
	activeModalClass: 'modal_active'
})

// // Btn "Show-more"
// const clientsElements = document.querySelector('.clients')
// const moreButton = document.querySelector('.sub-wrapper__more > .btn_primary_blue')
// moreButton = addEventListener('click', () => {
// 	clientsElements.classList.add('active')
// })

// // Video
// const playButton = document.querySelector('.video-controler')
// const videoContainer = document.querySelector('.video-container video')
// playButton.addEventListener('click', () => {
// 	playButton.classList.add('active')
// 	videoContainer.play()
// })
// videoContainer.addEventListener('click', () => {
// 	playButton.classList.remove('active')
// 	videoContainer.pause()
// })

const eventsSwiper = new Swiper('.events', {
	slidesPerView: 'auto',
	spaceBetween: 0
})

const partnersSwiper = new Swiper('.partners', {
	spaceBetween: 4,
	slidesPerView: 'auto',
	breakpoints: {
		1024: {
			slidesPerView: 5
		}
	}
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
			spaceBetween: 100
		}
	}
})

const programmsCardsSwiper = new Swiper('.programms__cards', {
	slidesPerView: 'auto',
	spaceBetween: 2,
	grid: {
		fill: 'row',
		rows: 2
	},
	breakpoints: {
		992: {
			grid: {
				fill: 'row',
				rows: 3
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		}
	}
})

const aboutUsSwiper = new Swiper('.about-us__photo', {
	slidesPerView: 'auto',
	spaceBetween: 0,
	loop: true,
	autoplay: {
		delay: 5000
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
})

const partnershipIconsSwiper = new Swiper('.partnership__icons', {
	slidesPerView: 'auto',
	spaceBetween: 0,
	grid: {
		fill: 'row',
		rows: 2
	}
})

const reviewsTabsSwiper = new Swiper('.reviews__tabs', {
	slidesPerView: 'auto',
	spaceBetween: 44,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
	breakpoints: {
		992: {
			scrollbar: false,
			spaceBetween: 100
		}
	}
})

const reviewsCardsSwiper = new Swiper('.reviews__cards', {
	slidesPerView: 'auto',
	spaceBetween: 40,
	breakpoints: {
		992: {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		}
	}
})

const newsCardsSwiper = new Swiper('.news__cards', {
	slidesPerView: 'auto',
	spaceBetween: 4,
	grid: {
		fill: 'row',
		rows: 1
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
	breakpoints: {
		992: {
			grid: {
				fill: 'row',
				rows: 2
			}
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
const profile = document.getElementById('profile')
const profileMenu = document.getElementById('profile-menu')
const bottomSearchButton = document.getElementById('bottom-search-btn')
const bottomBurgerButton = document.getElementById('bottom-burger-btn')

profile.addEventListener('click', () => {
	rlMenu.classList.remove('service-menu_active')
	searchMenu.classList.remove('search-menu_active')
	menu.classList.remove('menu_active')
	vrMenu.classList.remove('service-menu_active')
	profileMenu.classList.toggle('profile-menu_active')
})

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
		rlMenu.style.transform = 'translateX(-47.5em)'
		vrMenu.classList.remove('service-menu_active')
		vrMenu.style.transform = 'translateX(-47.5em)'
		profileMenu.classList.remove('profile-menu_active')
		profileMenu.style.transform = 'translateX(-47.5em)'
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

takeControlAccordion('.vacancies', '.accordion__list', {
	accordionItemSelector: '.accordion__item',
	accordionItemTogglerSelector: '.accordion__toggle',
	accordionItemContentSelector: '.accordion__content',
	accordionItemActiveClass: 'accordion__item_active'
})

// benefits backgrounds
const benefitsCards = document.querySelector('.benefits__cards')
benefitsCards.children[0].addEventListener('mouseenter', (e) => {
	benefitsCards.style.backgroundImage = 'url(../files/images/benefits-background-1.png)'
	e.target.classList.add('benefits__card_active')
})
benefitsCards.children[1].addEventListener('mouseenter', (e) => {
	benefitsCards.style.backgroundImage = 'url(../files/images/benefits-background-2.png)'
	e.target.classList.add('benefits__card_active')
})
benefitsCards.children[2].addEventListener('mouseenter', (e) => {
	benefitsCards.style.backgroundImage = 'url(../files/images/benefits-background-3.png)'
	e.target.classList.add('benefits__card_active')
})
benefitsCards.children[3].addEventListener('mouseenter', (e) => {
	benefitsCards.style.backgroundImage = 'url(../files/images/benefits-background-4.png)'
	e.target.classList.add('benefits__card_active')
})
benefitsCards.children[4].addEventListener('mouseenter', (e) => {
	benefitsCards.style.backgroundImage = 'url(../files/images/benefits-background-5.png)'
	e.target.classList.add('benefits__card_active')
})

benefitsCards.children[0].addEventListener('mouseleave', (e) => {
	e.target.classList.remove('benefits__card_active')
})
benefitsCards.children[1].addEventListener('mouseleave', (e) => {
	e.target.classList.remove('benefits__card_active')
})
benefitsCards.children[2].addEventListener('mouseleave', (e) => {
	e.target.classList.remove('benefits__card_active')
})
benefitsCards.children[3].addEventListener('mouseleave', (e) => {
	e.target.classList.remove('benefits__card_active')
})
benefitsCards.children[4].addEventListener('mouseleave', (e) => {
	e.target.classList.remove('benefits__card_active')
})
