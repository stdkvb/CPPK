import AccordionController from "../../ElementsControllers/AccordionController.js";

const takeControlAccordion = (accordionSectionSelector, accordionContainerSelector, options) => {
	const accordionParentSection = document.querySelector(accordionSectionSelector)
	if (!accordionParentSection) {
		return
	}
	const accordionContainersElements = accordionParentSection.querySelectorAll(accordionContainerSelector)
	if (!accordionContainersElements) {
		return
	}
	accordionContainersElements.forEach((accordionContainerElement) => {
		new AccordionController(accordionParentSection, accordionContainerElement, options)
	})
}

export default takeControlAccordion;
