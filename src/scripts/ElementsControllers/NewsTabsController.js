const takeControlNewsTabs = () => {
	const newsTabs = document.querySelectorAll('.news__tab')
	const firstNewsTab = document.getElementById('news-tab-1')
	const secondNewsTab = document.getElementById('news-tab-2')
	const newsTabContents = document.querySelectorAll('.news')
	const firstNewsTabContent = document.getElementById('news-tab-content-1')
	const secondNewsTabContent = document.getElementById('news-tab-content-2')

	if (firstNewsTab !== null) {
		function resetNewsActiveTabs() {
			newsTabs.forEach((elem) => {
				elem.classList.remove('swiper-slide_active')
			})
			newsTabContents.forEach((elem) => {
				elem.classList.remove('news_active')
			})
		}

		newsTabs.forEach((elem) => {
			elem.addEventListener('click', () => {
				resetNewsActiveTabs()
				elem.classList.add('swiper-slide_active')
			})
		})

		firstNewsTab.addEventListener('click', () => {
			firstNewsTabContent.classList.add('news_active')
		})
		secondNewsTab.addEventListener('click', () => {
			secondNewsTabContent.classList.add('news_active')
		})
	}
}

export default takeControlNewsTabs
