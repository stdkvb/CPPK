const takeControlVideo = () => {
	const playButton = document.querySelector('.video-controler')
	const videoContainer = document.querySelector('.video-container video')
	if (videoContainer !== null) {
		playButton.addEventListener('click', () => {
			playButton.classList.add('active')
			videoContainer.play()
		})
		videoContainer.addEventListener('click', () => {
			playButton.classList.remove('active')
			videoContainer.pause()
		})
	}
}

export default takeControlVideo
