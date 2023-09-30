
//Cuando realizo un CLICK, nav 'activo'

var burguer = document.querySelector('#menu');
var nav = document.querySelector('nav');

burguer.addEventListener('click', function(){
	nav.classList.toggle('active');
});


function filtrarPestana() {
  // BOTONES DE PESTAÑAS
  // Saco array de los botones de pestanas
  // Les quito la clase active a todos
  var button = document.getElementsByClassName("button");
  for (var i = 0; i < button.length; i++) {
    button[i].classList.remove("active");
  }
  // Le añado la clase active al botón clicado
  event.currentTarget.classList.add("active");

  // Saco array de todo el Portfolio
  var todoPortfolio = document.getElementsByClassName("Portfolio");
  console.log(todoPortfolio);
  // Oculto todos los elementos del Portfolio
  for (var i = 0; i < todoPortfolio.length; i++) {
    todoPortfolio[i].style.position = "absolute";
    todoPortfolio[i].style.left = "-9999px";
  }

  // Saco el texto del botón clicado
  var pestanaClicada = event.currentTarget.innerHTML;
  console.log(pestanaClicada);

  // Si la clase clicada es "Todo", muestro todas las imágenes
  if (pestanaClicada == "Todo") {
    for (var i = 0; i < todoPortfolio.length; i++) {
      todoPortfolio[i].style.position = "static";
      todoPortfolio[i].style.left = "auto";
    }
  } else {
    // Si no es "Todo", obtengo los elementos con la clase clicada
    var pestanasAMostrar = document.getElementsByClassName(pestanaClicada);

    // Y muestro esos elementos
    for (var i = 0; i < pestanasAMostrar.length; i++) {
      pestanasAMostrar[i].style.position = "static";
      pestanasAMostrar[i].style.left = "auto";
    }
  }
}


