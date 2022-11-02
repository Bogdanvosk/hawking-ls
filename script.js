const wrapper = document.querySelector('.wrapper')
const button = document.querySelector('.button')
const input = document.querySelector('.input')

wrapper.style.backgroundColor = window.localStorage.getItem("bgColor")

button.addEventListener('click', (e) => {
	e.preventDefault()

	wrapper.style.backgroundColor = input.value

	// rgb(199, 184, 234)
	window.localStorage.setItem("bgColor", input.value)

	input.value = ''
})