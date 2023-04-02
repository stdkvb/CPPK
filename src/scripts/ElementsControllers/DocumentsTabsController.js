const takeControlDocumentsTabs = () => {
	const documentsTabs = document.querySelectorAll('.documents__tab')
	const firstDocumentsTab = document.getElementById('documents-tab-1')
	const secondDocumentsTab = document.getElementById('documents-tab-2')
	const thirdDocumentsTab = document.getElementById('documents-tab-3')
	const fourthDocumentsTab = document.getElementById('documents-tab-4')
	const documentsTabContents = document.querySelectorAll('.documents__links')
	const firstDocumentsTabContent = document.getElementById('documents-tab-content-1')
	const secondDocumentsTabContent = document.getElementById('documents-tab-content-2')
	const thirdDocumentsTabContent = document.getElementById('documents-tab-content-3')
	const fourthDocumentsTabContent = document.getElementById('documents-tab-content-4')

	if (firstDocumentsTab !== null) {
		function resetDocumentsActiveTabs() {
			documentsTabs.forEach((elem) => {
				elem.classList.remove('swiper-slide_active')
			})
			documentsTabContents.forEach((elem) => {
				elem.classList.remove('documents__links_active')
			})
		}

		documentsTabs.forEach((elem) => {
			elem.addEventListener('click', () => {
				resetDocumentsActiveTabs()
				elem.classList.add('swiper-slide_active')
			})
		})

		firstDocumentsTab.addEventListener('click', () => {
			firstDocumentsTabContent.classList.add('documents__links_active')
		})
		secondDocumentsTab.addEventListener('click', () => {
			secondDocumentsTabContent.classList.add('documents__links_active')
		})
		thirdDocumentsTab.addEventListener('click', () => {
			thirdDocumentsTabContent.classList.add('documents__links_active')
		})
		fourthDocumentsTab.addEventListener('click', () => {
			fourthDocumentsTabContent.classList.add('documents__links_active')
		})
	}
}

export default takeControlDocumentsTabs
