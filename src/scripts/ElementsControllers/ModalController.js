class ModalController {
	constructor(modalToggleElement, closeModalButtonSelector, options = {}) {

		const openButton = modalToggleElement
		openButton.addEventListener('click', (event) => {
			event.preventDefault()
			const modal = document.getElementById(event.target.attributes.modalId.value)

			const body = document.querySelector('body')
			body.appendChild(modal)
			modal.classList.add(options.activeModalClass)

			this._toggleBodyScroll(false)

			const modalsButtonsExit = modal.querySelectorAll(closeModalButtonSelector)
			modalsButtonsExit.forEach((modalsButtonExit) => {
				modalsButtonExit.addEventListener('click', () => {
					modal.classList.remove(options.activeModalClass)
					this._toggleBodyScroll(true)
				})
			})
		})

	}

	_toggleBodyScroll(isScrollable) {
		const allModals = document.querySelectorAll('.modal')

		const isMultipleOpenModals = Array.from(allModals).filter((modal) => modal.classList.contains('modal_active'))


		const body = document.querySelector('body')
		const html = document.querySelector('html')
		if (isScrollable && isMultipleOpenModals.length === 0) {
			body.style.overflowY = 'auto'
			html.style.overflowY = 'auto'

			return
		}

		body.style.overflowY = 'hidden'
		html.style.overflowY = 'hidden'
	}
}

export default ModalController
