class ModalVideoController extends ModalController {
	constructor(modalSelector, closeModalButtonSelector, options = {}) {
		super(modalSelector, closeModalButtonSelector, options);

		this.playButton = document.querySelector(modalSelector + ' #playButton');
		this.videoTag = document.querySelector(modalSelector + ' .videoTag');
		this.videoContainer = document.querySelector(modalSelector + ' .video-container');

		this.togglePlay = this._togglePlay.bind(this);
		this.playButton.addEventListener('click', this.togglePlay);
	}

	_togglePlay() {
		if (!this.videoTag)
			return;

		if (this.playButton.classList.contains('active')) {
			this.videoTag.play();
			this.videoContainer.classList.add('active');
			this.playButton.classList.remove('active');
		} else {
			this.videoTag.pause(),
				this.videoContainer.classList.remove('active');
			this.playButton.classList.add('active');
		}
	}

	closeModal() {
		super.closeModal();

		this.videoTag.pause();
		this.videoContainer.classList.remove('active');
		this.playButton.classList.add('active');
		this.modal.classList.remove(this.options.activeModalClass);
		this.playButton.removeEventListener('click', this.togglePlay);
	}
}

export default ModalVideoController;
