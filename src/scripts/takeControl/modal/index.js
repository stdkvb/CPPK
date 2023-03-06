import ModalController from "../../ElementsControllers/ModalController";

const takeModalController = (modalToggleButtons, closeModalButtonSelector, options) => {
	const modalToggleElements = document.querySelectorAll(modalToggleButtons)
	if (!modalToggleElements) {
		return
	}
	modalToggleElements.forEach((modalToggleElement) => {
		setTimeout(() => {
			new ModalController(modalToggleElement, closeModalButtonSelector, options)
		}, 500)
	})
}

export default takeModalController
