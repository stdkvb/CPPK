const takeControlReviewsTabs = () => {
	const reviewsTabs = document.querySelectorAll('.reviews__tab')
	const firstReviewsTab = document.getElementById('reviews-tab-1')
	const secondReviewsTab = document.getElementById('reviews-tab-2')
	const thirdReviewsTab = document.getElementById('reviews-tab-3')
	const reviewsTabContents = document.querySelectorAll('.reviews__cards')
	const firstReviewsTabContent = document.getElementById('reviews-tab-content-1')
	const secondReviewsTabContent = document.getElementById('reviews-tab-content-2')
	const thirdReviewsTabContent = document.getElementById('reviews-tab-content-3')

	if (firstReviewsTab !== null) {
		function resetReviewsActiveTabs() {
			reviewsTabs.forEach((elem) => {
				elem.classList.remove('swiper-slide_active')
			})
			reviewsTabContents.forEach((elem) => {
				elem.classList.remove('reviews__cards_active')
			})
		}

		reviewsTabs.forEach((elem) => {
			elem.addEventListener('click', () => {
				resetReviewsActiveTabs()
				elem.classList.add('swiper-slide_active')
			})
		})

		firstReviewsTab.addEventListener('click', () => {
			firstReviewsTabContent.classList.add('reviews__cards_active')
		})
		secondReviewsTab.addEventListener('click', () => {
			secondReviewsTabContent.classList.add('reviews__cards_active')
		})
		thirdReviewsTab.addEventListener('click', () => {
			thirdReviewsTabContent.classList.add('reviews__cards_active')
		})
	}
}

export default takeControlReviewsTabs
