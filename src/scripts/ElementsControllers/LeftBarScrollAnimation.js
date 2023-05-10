const takeControlLeftbarScrollAnimation = () => {
	const leftBar = document.querySelector('.left-bar')
	const programmsSection = document.querySelector('.programms')

	if (programmsSection !== null) {
		const visible = function (target) {
			const targetPosition = {
				top: window.pageYOffset + target.getBoundingClientRect().top
			}
			const windowPosition = {
				top: window.pageYOffset,
				left: window.pageXOffset,
				right: window.pageXOffset + document.documentElement.clientWidth,
				bottom: window.pageYOffset + document.documentElement.clientHeight
			}

			if (targetPosition.top < windowPosition.bottom) {
				leftBar.classList.remove('left-bar_transparent')
			} else {
				leftBar.classList.add('left-bar_transparent')
			}
		}
		window.addEventListener('scroll', () => {
			visible(programmsSection)
		})
		visible(programmsSection)
	}
}

export default takeControlLeftbarScrollAnimation
