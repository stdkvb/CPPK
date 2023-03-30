// close notification button
const takeControlNotification = () => {
	const notificationCloseButtons = document.querySelectorAll('.notification__close')
	notificationCloseButtons.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.parentElement.classList.remove('notification_active')
		})
	})
}

export default takeControlNotification
