const takeControlProfileTabs = () => {
	const signupBtn = document.getElementById('signup-btn')
	const signup = document.getElementById('signup')
	const signinBtn = document.getElementById('signin-btn')
	const signin = document.getElementById('signin')
	signupBtn.addEventListener('click', () => {
		signinBtn.classList.remove('active')
		signupBtn.classList.add('active')
		signup.classList.remove('disabled')
		signin.classList.add('disabled')
		signin.classList.remove('element-show')
	})
	signinBtn.addEventListener('click', () => {
		signupBtn.classList.remove('active')
		signinBtn.classList.add('active')
		signin.classList.remove('disabled')
		signup.classList.add('disabled')
		signup.classList.remove('element-show')
	})
}

export default takeControlProfileTabs
