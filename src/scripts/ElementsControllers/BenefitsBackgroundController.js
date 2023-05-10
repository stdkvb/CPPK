const takeControlBenefitsBackground = () => {
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
}

export default takeControlBenefitsBackground
