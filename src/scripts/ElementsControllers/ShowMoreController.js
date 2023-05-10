const takeControlShowMore = () => {
	const cardsList = document.querySelector('.cards-list')
	const showMoreButton = document.querySelector('.show-more-btn')
	if (showMoreButton !== null) {
		showMoreButton.addEventListener('click', () => {
			cardsList.classList.add('active')
			showMoreButton.style.display = 'none'
		})
	}
}

export default takeControlShowMore
