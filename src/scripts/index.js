import CounterItemController from './ElementsControllers/CounterItemController'
import takeControlcustomSelect from './ElementsControllers/CustomSelectController'
import takeControlLeftBarScrollAnimation from './ElementsControllers/LeftBarScrollAnimation'
import takeControlNotification from './ElementsControllers/NotificationController'
import takeControlProgrammsTabs from './ElementsControllers/ProgrammsTabsController'
import takeControlReviewsTabs from './ElementsControllers/ReviewsTabsController'
import takeControlProfileTabs from './ElementsControllers/ProfileTabsController'
import takeControlMenu from './ElementsControllers/MenuController'
import takeControlBenefitsBackground from './ElementsControllers/BenefitsBackgroundController'
import takeControlVideo from './ElementsControllers/VideoController'
import takeControlShowMore from './ElementsControllers/ShowMoreController'
import takeControlAccordion from './ElementsControllers/AccordionController'
import takeControlCookie from './ElementsControllers/CookieController'
import takeControlForms from './ElementsControllers/FormController'
import takeControlModals from './ElementsControllers/ModalController'
import takeControlYandexMap from './ElementsControllers/YandexMapController'

takeControlYandexMap()
takeControlLeftBarScrollAnimation()
takeControlNotification()
takeControlProgrammsTabs()
takeControlReviewsTabs()
takeControlProfileTabs()
takeControlMenu()
takeControlBenefitsBackground()
takeControlVideo()
takeControlShowMore()
takeControlForms()
takeControlcustomSelect('custom-select')
takeControlCookie('.cookie-container', '.cookie-accept')
takeControlModals('.open-modal', '.modal-close', {
	activeModalClass: 'modal_active'
})

// page laod animation
function onEntry(entry) {
	document.querySelector('#header').classList.add('element-show')
	document.querySelector('#left-bar').classList.add('element-show')
	document.querySelector('#bottom-bar').classList.add('element-show')
	entry.forEach((change) => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show')
		}
	})
}
const options = { threshold: [0.1] }
const observer = new IntersectionObserver(onEntry, options)
const elements = document.querySelectorAll('.element-animation')
// eslint-disable-next-line no-restricted-syntax
for (const elm of elements) {
	observer.observe(elm)
}

// counter on main
new CounterItemController({
	countersElementsWrapperSelector: '.about-us__text-container',
	counterElementSelector: '.about-us__numbers',
	counterNumElementSelector: '.value',
	calcAnimationDelay: 3000,
	clearHoverDelay: 700
})

// accordions init
takeControlAccordion('.sub-menu', '.sub-menu__list', {
	accordionItemSelector: '.sub-menu__links',
	accordionItemTogglerSelector: '.sub-menu__toggle',
	accordionItemContentSelector: '.sub-menu__content',
	accordionItemActiveClass: 'sub-menu__links_active'
})

takeControlAccordion('.sub-wrapper__accordion', '.accordion__list', {
	accordionItemSelector: '.accordion__item',
	accordionItemTogglerSelector: '.accordion__toggle',
	accordionItemContentSelector: '.accordion__content',
	accordionItemActiveClass: 'accordion__item_active'
})

takeControlAccordion('.direction__filters', '.accordion__list', {
	accordionItemSelector: '.accordion__item',
	accordionItemTogglerSelector: '.accordion__toggle',
	accordionItemContentSelector: '.accordion__content',
	accordionItemActiveClass: 'accordion__item_active'
})

// swipers init
new Swiper('.events__container', {
	slidesPerView: 'auto',
	spaceBetween: 0,
	breakpoints: {
		992: {
			slidesPerView: 3
		}
	}
})

new Swiper('.partners', {
	spaceBetween: 4,
	slidesPerView: 'auto',
	breakpoints: {
		1024: {
			slidesPerView: 5
		}
	}
})

new Swiper('.programms__tabs', {
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

new Swiper('.programms__cards', {
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

new Swiper('.about-us__photo', {
	slidesPerView: 'auto',
	spaceBetween: 0,
	loop: true,
	parallax: true,
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

new Swiper('.partnership__icons', {
	slidesPerView: 'auto',
	spaceBetween: 0,
	grid: {
		fill: 'row',
		rows: 2
	}
})

new Swiper('.reviews__tabs', {
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

new Swiper('.reviews__cards', {
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

new Swiper('.news__tabs', {
	slidesPerView: 2,
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

new Swiper('.documents__tabs', {
	slidesPerView: 'auto',
	spaceBetween: 44,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
	breakpoints: {
		1700: {
			slidesPerView: 4,
			// scrollbar: false,
			spaceBetween: 80
		}
	}
})

new Swiper('.news__cards', {
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

new Swiper('.nav-bar', {
	slidesPerView: 'auto',
	spaceBetween: 44,
	breakpoints: {
		992: {
			spaceBetween: 80
		}
	}
})

new Swiper('.advantages__tabs', {
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
