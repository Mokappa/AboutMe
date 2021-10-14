//Loading Animation
setTimeout( function() {
    $('.preloader').fadeToggle();
}, 4000);



//Parallax text
let text = document.getElementById('title');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    text.style.paddingTop = value * 0.5 + 'px';
});



//Nav background
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
});



/*GET LENGTH OF PATHS
const logo = document.querySelectorAll("#logo path");

for( let i = 0; i < logo.length; ++ i )
{
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}*/



/*NAV COLOR AFTER SCROLLING
var nav = document.querySelector("nav");

window.addEventListener("scroll", function() {
    if( window.pageYOffset > 100 ) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});
*/