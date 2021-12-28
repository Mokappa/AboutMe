//Nav Burger
navSlide()

function navSlide() {
	const burger = document.querySelector('.burgerMenu')
	const navLinks = document.querySelectorAll('.navList li')
	const nav = document.querySelector('.navPhone')

	burger.addEventListener('click', function() {
		//Toggle Nav
		nav.classList.toggle('navPhoneActiv')

		//Burger Animation
		burger.classList.toggle('toggle')
		
		//Animate Links
		navLinks.forEach( function(link, index) {
			if(link.style.animation) {
				link.style.animation = ''
			}
			else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
			}
		})
	})
	
	window.addEventListener('touchstart', function (e) {
		if(e.target.getAttribute('data-close') !== 'noClose') {
			burger.classList.remove('toggle')
			nav.classList.remove('navPhoneActiv')
		}
	})
}