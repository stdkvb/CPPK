class AccordionController {
	constructor(accordionParentSection, accordionContainerElement, options = {}) {
		const accordionItemsElements = accordionContainerElement.querySelectorAll(options.accordionItemSelector)
		accordionItemsElements.forEach((accordionItemElement) => {
			const accordionItemToggler = accordionItemElement.querySelector(options.accordionItemTogglerSelector)

			accordionItemToggler.addEventListener('click', (event) => {

				const isActive = accordionItemElement.classList.contains(options.accordionItemActiveClass)
				this._deactiveAllAccordionItems()

				if (isActive) {
					return
				}

				accordionItemElement.classList.add(options.accordionItemActiveClass)
			})
		})
		this._accordionItems = accordionItemsElements
		this._options = options
	}

	_deactiveAllAccordionItems() {
		this._accordionItems.forEach((accordionItem) => {
			accordionItem.classList.remove(this._options.accordionItemActiveClass)
		})
	}
};

export default AccordionController
