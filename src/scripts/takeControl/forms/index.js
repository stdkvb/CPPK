import takeControlCommunicationForms from './communication.js'

const takeControlForms = () => {
	takeControlCommunicationForms('.profile__registration', 'form', {
		elementsNames: ['email', 'password', 'repeat-password', 'name', 'phone', 'agreement'],
		onSubmit: () => {
		}
	})
}

export default takeControlForms
