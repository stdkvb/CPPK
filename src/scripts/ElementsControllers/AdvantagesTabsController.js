const takeControlAdvantagesTabs = () => {
	const advantagesTabs = document.querySelectorAll('.advantages__tab')
	const firstAdvantagesTab = document.getElementById('advantages-tab-1')
	const secondAdvantagesTab = document.getElementById('advantages-tab-2')
	const thirdAdvantagesTab = document.getElementById('advantages-tab-3')
	const advantagesTabContents = document.querySelectorAll('.advantages__cards')
	const firstAdvantagesTabContent = document.getElementById('advantages-tab-content-1')
	const secondAdvantagesTabContent = document.getElementById('advantages-tab-content-2')
	const thirdAdvantagesTabContent = document.getElementById('advantages-tab-content-3')

	if (firstAdvantagesTab !== null) {
		function resetAdvantagesActiveTabs () {
			advantagesTabs.forEach((elem) => {
				elem.classList.remove('swiper-slide_active')
			})
			advantagesTabContents.forEach((elem) => {
				elem.classList.remove('advantages__cards_active')
			})
		}

		advantagesTabs.forEach((elem) => {
			elem.addEventListener('click', () => {
				resetAdvantagesActiveTabs ()
				elem.classList.add('swiper-slide_active')
			})
		})

		firstAdvantagesTab.addEventListener('click', () => {
			firstAdvantagesTabContent.classList.add('advantages__cards_active')
		})
		secondAdvantagesTab.addEventListener('click', () => {
			secondAdvantagesTabContent.classList.add('advantages__cards_active')
		})
		thirdAdvantagesTab.addEventListener('click', () => {
			thirdAdvantagesTabContent.classList.add('advantages__cards_active')
		})
	}
}

export default takeControlAdvantagesTabs
