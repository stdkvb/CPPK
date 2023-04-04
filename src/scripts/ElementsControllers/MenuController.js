const takeControlMenu = () => {
	// left bar
	const burgerBtn = document.getElementById('burger-btn')
	const menu = document.getElementById('menu')
	const profileBtn = document.getElementById('profile-btn')
	const profileLoggedBtn = document.getElementById('profile-logged-btn')
	const profileMenu = document.getElementById('profile-access-menu')
	const vrBtn = document.getElementById('vr-btn')
	const vrMenu = document.getElementById('vr-menu')
	const rlBtn = document.getElementById('rl-btn')
	const rlMenu = document.getElementById('rl-menu')
	const searchBtn = document.getElementById('search-btn')
	const searchMenu = document.getElementById('search-menu')
	const mailBtn = document.getElementById('mail-btn')
	const mailMenu = document.getElementById('mail-menu')
	const callRequestBtns = document.querySelectorAll('.call-request-btn')
	const callRequestMenu = document.getElementById('call-request-menu')
	const learningPlanRequestBtn = document.getElementById('learning-plan-request-btn')
	const learningPlanRequestMenu = document.getElementById('learning-plan-request-menu')
	const bottomVRButton = document.getElementById('virtual-reality')
	const bottomRLButton = document.getElementById('remote-learning')
	const bottomProfileButton = document.getElementById('profile')
	const bottomSearchButton = document.getElementById('bottom-search-btn')
	const bottomBurgerButton = document.getElementById('bottom-burger-btn')
	const bottomProfileLoggedButton = document.getElementById('profile-logged')
	const profileLoggedMenu = document.getElementById('profile-logged-menu')

	function closeAllMenu() {
		mailMenu.classList.remove('service-menu_active')
		menu.classList.remove('menu_active')
		searchMenu.classList.remove('search-menu_active')
		if (profileMenu !== null) {
			profileMenu.classList.remove('service-menu_active')
		}
		vrMenu.classList.remove('service-menu_active')
		rlMenu.classList.remove('service-menu_active')
		callRequestMenu.classList.remove('service-menu_active')
		learningPlanRequestMenu.classList.remove('service-menu_active')
		if (profileBtn !== null) {
			profileBtn.classList.remove('link-icon_disable')
		}
		vrBtn.classList.remove('link-icon_disable')
		rlBtn.classList.remove('link-icon_disable')
		searchBtn.classList.remove('link-icon_disable')
		mailBtn.classList.remove('link-icon_disable')
		bottomVRButton.classList.remove('link_disable')
		bottomRLButton.classList.remove('link_disable')
		bottomSearchButton.classList.remove('link_disable')
		bottomBurgerButton.classList.remove('link_disable')
		if (bottomProfileButton !== null) {
			bottomProfileButton.classList.remove('link_disable')
		}
	}

	function disableServiceMenuIcons() {
		if (profileBtn !== null) {
			profileBtn.classList.add('link-icon_disable')
		}
		if (profileLoggedBtn !== null) {
			profileLoggedBtn.classList.add('link-icon_disable')
		}
		vrBtn.classList.add('link-icon_disable')
		rlBtn.classList.add('link-icon_disable')
		searchBtn.classList.add('link-icon_disable')
		mailBtn.classList.add('link-icon_disable')
	}

	burgerBtn.addEventListener('click', () => {
		closeAllMenu()
		menu.classList.add('menu_active')
	})

	if (callRequestBtns !== null) {
		callRequestBtns.forEach((elem) => {
			elem.addEventListener('click', () => {
				closeAllMenu()
				callRequestMenu.classList.add('service-menu_active')
			})
		})
	}

	if (learningPlanRequestBtn !== null) {
		learningPlanRequestBtn.addEventListener('click', () => {
			closeAllMenu()
			learningPlanRequestMenu.classList.add('service-menu_active')
		})
	}

	if (profileBtn !== null) {
		profileBtn.addEventListener('click', () => {
			closeAllMenu()
			disableServiceMenuIcons()
			profileBtn.classList.remove('link-icon_disable')
			profileMenu.classList.add('service-menu_active')
		})
	}

	vrBtn.addEventListener('click', () => {
		closeAllMenu()
		disableServiceMenuIcons()
		vrBtn.classList.remove('link-icon_disable')
		vrMenu.classList.add('service-menu_active')
	})

	rlBtn.addEventListener('click', () => {
		closeAllMenu()
		disableServiceMenuIcons()
		rlBtn.classList.remove('link-icon_disable')
		rlMenu.classList.add('service-menu_active')
	})

	searchBtn.addEventListener('click', () => {
		closeAllMenu()
		searchBtn.classList.remove('link-icon_disable')
		searchMenu.classList.add('search-menu_active')
	})

	mailBtn.addEventListener('click', () => {
		closeAllMenu()
		disableServiceMenuIcons()
		mailBtn.classList.remove('link-icon_disable')
		mailMenu.classList.add('service-menu_active')
	})

	// bottom bar
	function disableBottomBarIcons() {
		bottomVRButton.classList.add('link_disable')
		bottomRLButton.classList.add('link_disable')
		bottomSearchButton.classList.add('link_disable')
		bottomBurgerButton.classList.add('link_disable')
		if (bottomProfileButton !== null) {
			bottomProfileButton.classList.add('link_disable')
		}
		if (bottomProfileLoggedButton !== null) {
			bottomProfileLoggedButton.classList.add('link_disable')
		}
	}

	if (bottomProfileButton !== null) {
		bottomProfileButton.addEventListener('click', () => {
			searchMenu.classList.remove('search-menu_active')
			menu.classList.remove('menu_active')
			vrMenu.classList.remove('service-menu_active')
			rlMenu.classList.remove('service-menu_active')
			callRequestMenu.classList.remove('service-menu_active')
			learningPlanRequestMenu.classList.remove('service-menu_active')
			disableBottomBarIcons()
			bottomProfileButton.classList.remove('link_disable')
			profileMenu.classList.toggle('service-menu_active')
			document.body.style.overflow = 'hidden'
		})
	}

	if (bottomProfileLoggedButton !== null) {
		bottomProfileLoggedButton.addEventListener('click', () => {
			searchMenu.classList.remove('search-menu_active')
			menu.classList.remove('menu_active')
			vrMenu.classList.remove('service-menu_active')
			rlMenu.classList.remove('service-menu_active')
			callRequestMenu.classList.remove('service-menu_active')
			learningPlanRequestMenu.classList.remove('service-menu_active')
			disableBottomBarIcons()
			bottomProfileLoggedButton.classList.remove('link_disable')
			profileLoggedMenu.classList.toggle('profile-menu_active')
		})
	}

	bottomVRButton.addEventListener('click', () => {
		searchMenu.classList.remove('search-menu_active')
		menu.classList.remove('menu_active')
		profileMenu.classList.remove('service-menu_active')
		profileLoggedMenu.classList.remove('profile-menu_active')
		rlMenu.classList.remove('service-menu_active')
		callRequestMenu.classList.remove('service-menu_active')
		learningPlanRequestMenu.classList.remove('service-menu_active')
		disableBottomBarIcons()
		bottomVRButton.classList.remove('link_disable')
		vrMenu.classList.toggle('service-menu_active')
		document.body.style.overflow = 'hidden'
	})

	bottomRLButton.addEventListener('click', () => {
		searchMenu.classList.remove('search-menu_active')
		menu.classList.remove('menu_active')
		profileMenu.classList.remove('service-menu_active')
		profileLoggedMenu.classList.remove('profile-menu_active')
		vrMenu.classList.remove('service-menu_active')
		callRequestMenu.classList.remove('service-menu_active')
		learningPlanRequestMenu.classList.remove('service-menu_active')
		disableBottomBarIcons()
		bottomRLButton.classList.remove('link_disable')
		rlMenu.classList.toggle('service-menu_active')
		document.body.style.overflow = 'hidden'
	})

	bottomSearchButton.addEventListener('click', () => {
		menu.classList.remove('menu_active')
		profileMenu.classList.remove('service-menu_active')
		profileLoggedMenu.classList.remove('profile-menu_active')
		vrMenu.classList.remove('service-menu_active')
		rlMenu.classList.remove('service-menu_active')
		callRequestMenu.classList.remove('service-menu_active')
		learningPlanRequestMenu.classList.remove('service-menu_active')
		disableBottomBarIcons()
		bottomSearchButton.classList.remove('link_disable')
		searchMenu.classList.toggle('search-menu_active')
		document.body.style.overflow = 'hidden'
	})

	bottomBurgerButton.addEventListener('click', () => {
		searchMenu.classList.remove('search-menu_active')
		profileMenu.classList.remove('service-menu_active')
		profileLoggedMenu.classList.remove('profile-menu_active')
		vrMenu.classList.remove('service-menu_active')
		rlMenu.classList.remove('service-menu_active')
		callRequestMenu.classList.remove('service-menu_active')
		learningPlanRequestMenu.classList.remove('service-menu_active')
		disableBottomBarIcons()
		bottomBurgerButton.classList.remove('link_disable')
		menu.classList.toggle('menu_active')
		document.body.style.overflow = 'hidden'
	})

	// close menu button
	const menuCloseButtons = document.querySelectorAll('.close-btn')
	menuCloseButtons.forEach((elem) => {
		elem.addEventListener('click', () => {
			closeAllMenu()
			document.body.style.overflow = 'unset'
		})
	})

	// menu accordeon
// takeControlAccordion('.menu__accordion', '.accordion__list', {
// 	accordionItemSelector: '.accordion__item',
// 	accordionItemTogglerSelector: '.accordion__toggle',
// 	accordionItemContentSelector: '.accordion__content',
// 	accordionItemActiveClass: 'accordion__item_active'
// })

// const menuToggle = document.querySelector('.accordion__toggle')
// const subMenu = document.querySelector('.accordion__content')
// menuToggle.addEventListener('mouseover', () => {
// 	subMenu.classList.add('accordion__content_active')
// })

	const subMenuToggle = document.querySelector('.sub-menu__toggle')
	const subMenuContent = document.querySelector('.sub-menu__content')
	if (subMenuContent !== null) {
		subMenuToggle.addEventListener('click', () => {
			subMenuContent.classList.toggle('sub-menu__content_active')
		})
	}
}

export default takeControlMenu
