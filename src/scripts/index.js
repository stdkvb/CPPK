import { takeControlAccordion, takeControlModals, takeControlForms } from './takeControl'

takeControlModals('.open-modal', '.modal-close', {
	activeModalClass: 'modal_active'
})

takeControlForms();

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

const navBarSwiper = new Swiper('.nav-bar', {
	slidesPerView: 'auto',
	spaceBetween: 44,
	breakpoints: {
		992: {
			spaceBetween: 80
		}
	}
})

const advantagesTabsSwiper = new Swiper('.advantages__tabs', {
	slidesPerView: 'auto',
	spaceBetween: 44,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
	breakpoints: {
		992: {
			scrollbar: false,
			spaceBetween: 80
		}
	}
})

// left bar
const burgerBtn = document.getElementById('burger-btn')
const menu = document.getElementById('menu')
const profileBtn = document.getElementById('profile-btn')
const profileMenu = document.getElementById('profile-menu')
const vrBtn = document.getElementById('vr-btn')
const vrMenu = document.getElementById('vr-menu')
const rlBtn = document.getElementById('rl-btn')
const rlMenu = document.getElementById('rl-menu')
const searchBtn = document.getElementById('search-btn')
const searchMenu = document.getElementById('search-menu')

burgerBtn.addEventListener('click', () => {
	profileMenu.classList.remove('service-menu_active')
	vrMenu.classList.remove('service-menu_active')
	rlMenu.classList.remove('service-menu_active')
	menu.classList.add('menu_active')
})

profileBtn.addEventListener('mouseenter', () => {
	vrMenu.classList.remove('service-menu_active')
	rlMenu.classList.remove('service-menu_active')
	profileMenu.classList.add('service-menu_active')
})

vrBtn.addEventListener('mouseenter', () => {
	profileMenu.classList.remove('service-menu_active')
	rlMenu.classList.remove('service-menu_active')
	vrMenu.classList.add('service-menu_active')
})

rlBtn.addEventListener('mouseenter', () => {
	profileMenu.classList.remove('service-menu_active')
	vrMenu.classList.remove('service-menu_active')
	rlMenu.classList.add('service-menu_active')
})

searchBtn.addEventListener('click', () => {
	profileMenu.classList.remove('service-menu_active')
	vrMenu.classList.remove('service-menu_active')
	rlMenu.classList.remove('service-menu_active')
	searchMenu.classList.add('search-menu_active')
})


// bottom bar
const VR = document.getElementById('virtual-reality')
const RL = document.getElementById('remote-learning')
const profile = document.getElementById('profile')
const bottomSearchButton = document.getElementById('bottom-search-btn')
const bottomBurgerButton = document.getElementById('bottom-burger-btn')

profile.addEventListener('click', () => {
	rlMenu.classList.remove('service-menu_active')
	searchMenu.classList.remove('search-menu_active')
	menu.classList.remove('menu_active')
	vrMenu.classList.remove('service-menu_active')
	profileMenu.classList.toggle('service-menu_active')
})

VR.addEventListener('click', () => {
	profileMenu.classList.remove('service-menu_active')
	rlMenu.classList.remove('service-menu_active')
	searchMenu.classList.remove('search-menu_active')
	menu.classList.remove('menu_active')
	vrMenu.classList.toggle('service-menu_active')
})

RL.addEventListener('click', () => {
	profileMenu.classList.remove('service-menu_active')
	vrMenu.classList.remove('service-menu_active')
	searchMenu.classList.remove('search-menu_active')
	menu.classList.remove('menu_active')
	rlMenu.classList.toggle('service-menu_active')
})

bottomSearchButton.addEventListener('click', () => {
	profileMenu.classList.remove('service-menu_active')
	rlMenu.classList.remove('service-menu_active')
	vrMenu.classList.remove('service-menu_active')
	menu.classList.remove('menu_active')
	searchMenu.classList.toggle('search-menu_active')
})

bottomBurgerButton.addEventListener('click', () => {
	profileMenu.classList.remove('service-menu_active')
	rlMenu.classList.remove('service-menu_active')
	vrMenu.classList.remove('service-menu_active')
	searchMenu.classList.remove('search-menu_active')
	menu.classList.toggle('menu_active')
})

// profile
const signupBtn = document.getElementById('signup-btn')
const signup = document.getElementById('signup')
const signinBtn = document.getElementById('signin-btn')
const signin = document.getElementById('signin')
signupBtn.addEventListener('click', () => {
	signinBtn.classList.remove('profile__title_active')
	signupBtn.classList.add('profile__title_active')
	signin.classList.remove('profile__form_active')
	signup.classList.add('profile__form_active')
})
signinBtn.addEventListener('click', () => {
	signupBtn.classList.remove('profile__title_active')
	signinBtn.classList.add('profile__title_active')
	signup.classList.remove('profile__form_active')
	signin.classList.add('profile__form_active')
})

// close all menu
const menuCloseButtons = document.querySelectorAll('.close-btn')
menuCloseButtons.forEach((elem) => {
	elem.addEventListener('click', () => {
		menu.classList.remove('menu_active')
		profileMenu.classList.remove('service-menu_active')
		vrMenu.classList.remove('service-menu_active')
		rlMenu.classList.remove('service-menu_active')
		searchMenu.classList.remove('search-menu_active')
	})
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
if (subMenuContent !== null) {
	subMenuToggle.addEventListener('click', () => {
		subMenuContent.classList.toggle('sub-menu__content_active')
	})
}

takeControlAccordion('.sub-wrapper__accordion', '.accordion__list', {
	accordionItemSelector: '.accordion__item',
	accordionItemTogglerSelector: '.accordion__toggle',
	accordionItemContentSelector: '.accordion__content',
	accordionItemActiveClass: 'accordion__item_active'
})

// benefits backgrounds
const benefitsCards = document.querySelector('.benefits__cards')
if (benefitsCards !== null) {
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
}

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

// show more
const cardsList = document.querySelector('.cards-list')
const showMoreButton = document.querySelector('.show-more-btn')
if (showMoreButton !== null) {
	showMoreButton.addEventListener('click', () => {
		cardsList.classList.add('active')
		showMoreButton.style.display = 'none'
	})
}

// filter accordeon
takeControlAccordion('.direction__filters', '.accordion__list', {
	accordionItemSelector: '.accordion__item',
	accordionItemTogglerSelector: '.accordion__toggle',
	accordionItemContentSelector: '.accordion__content',
	accordionItemActiveClass: 'accordion__item_active'
})

// Btn "Show-more"
const clientsElements = document.querySelector('.clients')
const moreButton = document.querySelector('.sub-wrapper__more > .btn_primary_blue')
if (moreButton !== null) {
	moreButton = addEventListener('click', () => {
		clientsElements.classList.add('active')
	})
}

// Video
const playButton = document.querySelector('.video-controler')
const videoContainer = document.querySelector('.video-container video')
if (videoContainer !== null) {
	playButton.addEventListener('click', () => {
		playButton.classList.add('active')
		videoContainer.play()
	})
	videoContainer.addEventListener('click', () => {
		playButton.classList.remove('active')
		videoContainer.pause()
	})
}

// custom select
function customSelect(id) {
	let x
	let i
	let j
	let l
	let closeArrow
	let ll
	let selElmnt
	let a
	let b
	let arrow
	let c
	/* look for any elements with the class "custom-select": */
	x = document.getElementsByClassName(id)
	l = x.length

	closeArrow = document.getElementById('select-container')

	for (i = 0; i < l; i++) {
		selElmnt = x[i].getElementsByTagName('select')[0]
		ll = selElmnt.length
		/* for each element, create a new DIV that will act as the selected item: */
		a = document.createElement('DIV')
		a.setAttribute('class', 'select-selected')
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
		x[i].appendChild(a)

		/* for each element, create a new DIV that will contain the option list: */
		b = document.createElement('DIV')
		b.setAttribute('class', 'select-items select-hide')

		for (j = 1; j < ll; j++) {
			/* for each option in the original select element,
    create a new DIV that will act as an option item: */
			c = document.createElement('DIV')
			c.innerHTML = selElmnt.options[j].innerHTML
			c.addEventListener('click', function (e) {
				/* when an item is clicked, update the original select box,
        and the selected item: */
				let y
				let i
				let k
				let s
				let h
				let sl
				let yl
				s = this.parentNode.parentNode.getElementsByTagName('select')[0]
				sl = s.length
				h = this.parentNode.previousSibling

				for (i = 0; i < sl; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i
						h.innerHTML = this.innerHTML
						y = this.parentNode.getElementsByClassName('selected-item')
						yl = y.length

						for (k = 0; k < yl; k++) {
							y[k].removeAttribute('class')
						}
						this.setAttribute('class', 'selected-item')
						break
					}
				}
				h.click()
			})
			b.appendChild(c)
		}

		x[i].appendChild(b)
		a.addEventListener('click', function (e) {
			/* when the select box is clicked, close any other select boxes,
      and open/close the current select box: */
			e.stopPropagation()
			closeAllSelect(this)
			this.nextSibling.classList.toggle('select-hide')
			closeArrow.classList.toggle('open')
			this.classList.toggle('select-arrow-active')
		})
	}

	function closeAllSelect(elmnt) {
		/* a function that will close all select boxes in the document,
  except the current select box: */
		let x
		let y
		let i
		let xl
		let yl
		const arrNo = []
		x = document.getElementsByClassName('select-items')
		y = document.getElementsByClassName('select-selected')
		xl = x.length
		yl = y.length

		for (i = 0; i < yl; i++) {
			if (elmnt == y[i]) {
				arrNo.push(i)
			} else {
				y[i].classList.remove('select-arrow-active')
			}
		}

		for (i = 0; i < xl; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add('select-hide')
				closeArrow.classList.remove('open')
				// x[i]closeArrow.classList.add("open");
			}
		}
	}
	/* if the user clicks anywhere outside the select box,
then close all select boxes: */
	document.addEventListener('click', closeAllSelect)
}

customSelect('select-container')
