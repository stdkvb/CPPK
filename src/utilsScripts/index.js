import checkSupportedWebp from './checkSupportedWebp'

window.addEventListener('DOMContentLoaded', () => {
	checkSupportedWebp((isSupported) => document.querySelector('body').classList.add(isSupported ? 'webp' : 'no-webp'))
})
