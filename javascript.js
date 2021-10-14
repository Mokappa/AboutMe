//Loading Animation
setTimeout( function() {
    $('.preloader').fadeToggle();
}, 4000);



//Parallax Text
let text = document.getElementById('title');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    text.style.paddingTop = value * 0.5 + 'px';
});



//Nav Background
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
});



/*Get length of paths
const logo = document.querySelectorAll("#logo path");

for( let i = 0; i < logo.length; ++ i )
{
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}*/