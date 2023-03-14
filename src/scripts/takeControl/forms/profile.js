import ProfileFormController from '../../ElementsControllers/ProfileFormController.js'

const takeControlProfileForms = (formContainerSelector, formSelector, defaultOptions) => {
	const formsContainers = document.querySelectorAll(formContainerSelector)

	formsContainers.forEach((formContainer) => {
		const form = formContainer.querySelector(formSelector)

		new ProfileFormController(form, defaultOptions)
	})
}

export default takeControlProfileForms
