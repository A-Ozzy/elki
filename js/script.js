function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});;

// ================== burger =============
const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__menu');
const body = document.querySelector('.body');


burger.addEventListener('click', toggleMenu);

function toggleMenu() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	
	body.classList.toggle('lock');
}