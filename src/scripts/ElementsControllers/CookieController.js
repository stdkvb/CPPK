const cookieIsAcceptedStatusStorageKey = 'COOKIE_IS_ACCEPTED'

class CookieController {
	constructor(cookieContainerSelector, cookieAcceptButtonSelector) {
		const cookieContainerElement = document.querySelector(cookieContainerSelector)
		const cookieAcceptButtonElement = cookieContainerElement.querySelector(cookieAcceptButtonSelector)

		this._cookieContainer = cookieContainerElement

		const cookieIsAccepted = this._checkCookieIsAccepted()

		if (!cookieIsAccepted) {
			this._showCookieContainer()
		}

		cookieAcceptButtonElement.addEventListener('click', () => {
			this._setCookieIsAccepted()
			this._hideCookieContainer()
		})
	}

	_checkCookieIsAccepted = () => {
		return localStorage.getItem(cookieIsAcceptedStatusStorageKey)
	}

	_setCookieIsAccepted = () => {
		localStorage.setItem(cookieIsAcceptedStatusStorageKey, true)
	}

	_hideCookieContainer() {
		this._cookieContainer.classList.remove('cookie-container_showing')
	}

	_showCookieContainer() {
		this._cookieContainer.classList.add('cookie-container_showing')
	}
}

const takeControlCookie = (cookieContainerSelector, cookieAcceptButtonSelector) => {
	new CookieController(cookieContainerSelector, cookieAcceptButtonSelector)
}

export default takeControlCookie
