
//Cuando realizo un CLICK, nav 'activo'

var burguer = document.querySelector('#menu');
var nav = document.querySelector('nav');

burguer.addEventListener('click', function(){
	nav.classList.toggle('active');
});
