import CommunicationFormController from '../../ElementsControllers/CommunicationFormController.js'

const takeControlCommunicationForms = (formContainerSelector, formSelector, defaultOptions) => {
	const formsContainers = document.querySelectorAll(formContainerSelector)

	formsContainers.forEach((formContainer) => {
		const form = formContainer.querySelector(formSelector)

		new CommunicationFormController(form, defaultOptions)
	})
}

export default takeControlCommunicationForms
