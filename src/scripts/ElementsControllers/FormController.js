import DefaultInputController from './DefaultInputController.js'
import EmailInputController from './EmailInputController.js'
import PhoneInputController from './PhoneInputController.js'
import CheckboxInputController from './CheckboxInputController.js'
import TextAreaController from './TextAreaController.js'
import PasswordInputController from './PasswordInputController.js'

const typeCompliance = {
	text: {
		Controller: DefaultInputController,
		options: {
			invalidStateClassName: 'input__container_invalid',
			validStateClassName: 'input__container_valid'
		},
	},
	tel: {
		Controller: PhoneInputController,
		options: {
			invalidStateClassName: 'input__container_invalid',
			validStateClassName: 'input__container_valid'
		}
	},
	email: {
		Controller: EmailInputController,
		options: {
			invalidStateClassName: 'input__container_invalid',
			validStateClassName: 'input__container_valid'
		}
	},
	checkbox: {
		Controller: CheckboxInputController,
		options: {
			invalidStateClassName: 'checkbox_invalid',
		}
	},
	textarea: {
		Controller: TextAreaController,
		options: {
			invalidStateClassName: 'textarea__container_invalid',
			validStateClassName: 'textarea__container_valid'
		}
	},
	password: {
		Controller: PasswordInputController,
		options: {
			invalidStateClassName: 'input__container_invalid',
			validStateClassName: 'input__container_valid'
		},
	},
}

class FormController {
	constructor(form, options = {}) {
		if (!form) {
			return
		}

		const controllers = {}
		;[...form.elements].forEach((element) => {
			const container = element.parentNode

			const {Controller, options: controllerOptions} = typeCompliance[element.dataset.type] || {}

			if (!Controller) {
				return
			}

			const field = [...container.querySelectorAll('*')].find((el) => el.name)
			controllers[field.name] = new Controller(container, controllerOptions)
		})

		// form.onsubmit = (event) => {
		// 	this._submitHandler(event)
		// }

		form.addEventListener('submit', (event) => {
			// event.preventDefault()
			this._submitHandler(event)
		})

		this._form = form
		this._options = options
		this._controllers = controllers
	}

	_getValidFieldsInfo () {
		return this._options.elementsNames.reduce((validFieldsInfoAccum, elementName) => {
			const element = this._form.elements[elementName]
			if (!element) {
				return { ...validFieldsInfoAccum, [elementName]: true }
			}

			const controller = this._controllers[elementName]

			if (controller) {
				return { ...validFieldsInfoAccum, [elementName]: controller.isValid }
			}

			if (element.type === 'checkbox') {
				return { ...validFieldsInfoAccum, [elementName]: !element.required || !!element.checked }
			}

			return { ...validFieldsInfoAccum, [elementName]: !element.required || !!element.value.trim() }
		}, {})
	}

	_triggerInvalidFields () {
		const validFieldsInfo = this._getValidFieldsInfo()

		if (!Object.values(validFieldsInfo).some((isValid) => !isValid)) {
			return
		}

		let isScrolled = false
		Object.entries(validFieldsInfo).forEach(([name, isValid]) => {
			if (isValid) {
				return
			}

			const element = this._form.elements[name]
			if (element && !isScrolled) {
				element.parentNode.scrollIntoView({ behavior: 'smooth', block: 'center' })
				isScrolled = true
			}

			this._controllers[name].triggerError()
		})

		return true
	}

	_clearForm () {
		Object.values(this._controllers).forEach(controller => controller.clearField())
	}

	_submitHandler(event) {
		if (this._triggerInvalidFields()) {
			return
		}
		this._options.onSubmit?.(event)

		// this._clearForm()
	}
}

// save profile button
const profileForm = document.querySelector('.profile_filled')
if (profileForm !== null) {
	const profileInputs = profileForm.querySelectorAll('input')
	profileInputs.forEach((elem) => {
		elem.addEventListener('input', () => {
			document.getElementById('save').classList.remove('btn_blue-fill_disable')
		})
	})
}

// password toggle
const passwordToggle = document.querySelectorAll('.toggle-show-password-btn')
passwordToggle.forEach((elem) => {
	elem.addEventListener('click', e =>{
		const type = elem.previousElementSibling.getAttribute("type") === "password" ? "text" : "password"
		elem.previousElementSibling.setAttribute("type", type)
	})
})

const takeControlForm = (formContainerSelector, formSelector, defaultOptions) => {
	const formsContainers = document.querySelectorAll(formContainerSelector)

	formsContainers.forEach((formContainer) => {
		const form = formContainer.querySelector(formSelector)

		new FormController(form, defaultOptions)
	})
}

const takeControlForms = () => {
	takeControlForm('.signup', 'form', {
		elementsNames: ['email', 'password', 'repeatpassword', 'name', 'phone', 'agreement'],
		onSubmit: () => {
		}
	})

	takeControlForm('.signin', 'form', {
		elementsNames: ['email', 'password'],
		onSubmit: () => {
		}
	})

	takeControlForm('.recovery', 'form', {
		elementsNames: ['email'],
		onSubmit: () => {
		}
	})

	takeControlForm('.recovery-confirmation', 'form', {
		elementsNames: ['code'],
		onSubmit: () => {
		}
	})

	takeControlForm('.recovery-new-password', 'form', {
		elementsNames: ['password', 'repeat-password'],
		onSubmit: () => {
		}
	})

	takeControlForm('.call-request', 'form', {
		elementsNames: ['name', 'email', 'phone', 'agreement'],
		onSubmit: () => {
		}
	})

	takeControlForm('.learning-plan-request', 'form', {
		elementsNames: ['name', 'email', 'agreement'],
		onSubmit: () => {
		}
	})

	takeControlForm('.application', 'form', {
		elementsNames: ['name', 'phone', 'email', 'agreement'],
		onSubmit: () => {
		}
	})

	takeControlForm('.mail', 'form', {
		elementsNames: ['name', 'email', 'message', 'agreement'],
		onSubmit: () => {
		}
	})

	takeControlForm('.subscribe', 'form', {
		elementsNames: ['email', 'agreement'],
		onSubmit: () => {
		}
	})

	takeControlForm('.profile', 'form', {
		elementsNames: ['company', 'inn', 'adress', 'position', 'email', 'name', 'phone'],
		onSubmit: () => {
		}
	})

	takeControlForm('.profile_personally', 'form', {
		elementsNames: ['email', 'name', 'phone'],
		onSubmit: () => {
		}
	})

	takeControlForm('.password-change', 'form', {
		elementsNames: ['old-password', 'password', 'repeat-password'],
		onSubmit: () => {
		}
	})
}

export default takeControlForms
