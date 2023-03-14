import takeControlProfileForms from './profile.js'

const takeControlForms = () => {
	takeControlProfileForms('.registration', 'form', {
		elementsNames: ['email', 'password', 'repeat-password', 'name', 'phone', 'agreement'],
		onSubmit: () => {
		}
	})

	takeControlProfileForms('.authoristaion', 'form', {
		elementsNames: ['email', 'password'],
		onSubmit: () => {
		}
	})
}

export default takeControlForms
