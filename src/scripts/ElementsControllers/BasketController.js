const takeControlBasket = () => {
	const incrementButtons = document.querySelectorAll('.increment')
	const decrementButtons = document.querySelectorAll('.decrement')
	const subtotals = document.querySelectorAll('.subtotal-value')
	const mainSubtotal = document.querySelector('.main-subtotal')
	const discount = document.querySelector('.discount')
	const total = document.querySelector('.total')

	function subtotalSum() {
		let sum = 0
		for (let i = 0; i < subtotals.length; i++) {
			sum += parseFloat(subtotals[i].innerHTML)
		}
	}

	function totalSum() {
		if (total !==null) {
			total.innerHTML = parseFloat(mainSubtotal.innerHTML - discount.innerHTML)
		}
	}

	incrementButtons.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.previousElementSibling.value = parseInt(elem.previousElementSibling.value) + 1
			const price = elem.parentElement.previousElementSibling.firstElementChild.innerHTML
			const quantity = elem.previousElementSibling.value
			const subtotal = parseFloat(price * quantity)
			elem.parentElement.nextElementSibling.firstElementChild.innerHTML = subtotal
			subtotalSum()
			totalSum()
		})
	})

	decrementButtons.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.nextElementSibling.value = parseInt(elem.nextElementSibling.value) - 1
			const price = elem.parentElement.previousElementSibling.firstElementChild.innerHTML
			const quantity = elem.nextElementSibling.value
			const subtotal = parseFloat(price * quantity)
			elem.parentElement.nextElementSibling.firstElementChild.innerHTML = subtotal
			subtotalSum()
			totalSum()
		})
	})

	subtotalSum()
	totalSum()
}

export default takeControlBasket
