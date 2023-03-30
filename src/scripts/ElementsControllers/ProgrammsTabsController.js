const takeControlProgrammsTabs = () => {
	const programmsTabs = document.querySelectorAll('.programms__tab')
	const firstProgrammsTab = document.getElementById('programms-tab-1')
	const secondProgrammsTab = document.getElementById('programms-tab-2')
	const thirdProgrammsTab = document.getElementById('programms-tab-3')
	const programmsTabContents = document.querySelectorAll('.programms__cards')
	const firstProgrammsTabContent = document.getElementById('programms-tab-content-1')
	const secondProgrammsTabContent = document.getElementById('programms-tab-content-2')
	const thirdProgrammsTabContent = document.getElementById('programms-tab-content-3')

	if (firstProgrammsTab !== null) {
		function resetProgrammsActiveTabs () {
			programmsTabs.forEach((elem) => {
				elem.classList.remove('swiper-slide_active')
			})
			programmsTabContents.forEach((elem) => {
				elem.classList.remove('programms__cards_active')
			})
		}

		programmsTabs.forEach((elem) => {
			elem.addEventListener('click', () => {
				resetProgrammsActiveTabs ()
				elem.classList.add('swiper-slide_active')
			})
		})

		firstProgrammsTab.addEventListener('click', () => {
			firstProgrammsTabContent.classList.add('programms__cards_active')
		})
		secondProgrammsTab.addEventListener('click', () => {
			secondProgrammsTabContent.classList.add('programms__cards_active')
		})
		thirdProgrammsTab.addEventListener('click', () => {
			thirdProgrammsTabContent.classList.add('programms__cards_active')
		})
	}
}

export default takeControlProgrammsTabs
