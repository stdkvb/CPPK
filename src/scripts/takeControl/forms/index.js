import takeControlForm from '../../ElementsControllers/FormController.js'

const takeControlForms = () => {
	takeControlForm('.signup', 'form', {
		elementsNames: ['email', 'password', 'repeatpassword', 'name', 'phone', 'agreement'],
		onSubmit: () => {
		}
	})

	takeControlForm('.signin', 'form', {
		elementsNames: ['email', 'password'],
		onSubmit: (event) => {
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
}

export default takeControlForms
