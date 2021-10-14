//Nav Burger
function navSlide() {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.incercare');
	const navLinks = document.querySelectorAll('.nav-list li');

	burger.addEventListener('click', function() {
		//Toggle Nav
		nav.classList.toggle('incercare-activ');

		//Animate Links
		navLinks.forEach( function(link, index) {
			if(link.style.animation) {
				link.style.animation = '';
			}
			else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
        
        //Burger Animation
		burger.classList.toggle('toggle'); 
	});
}

navSlide();