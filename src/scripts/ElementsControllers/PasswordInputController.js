import DefaultInputController from './DefaultInputController.js'

class PasswordInputController extends DefaultInputController {
	constructor(container, options = {}) {
		super(container, { ...options, inputType: 'password' })
	}

	checkValidation() {
		super.checkValidation()
	}
}

export default PasswordInputController
