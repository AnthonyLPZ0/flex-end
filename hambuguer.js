//const para la class nav-toggle
const navToggle = document.querySelector('.nav-toggle');

//const para la clase nav
const nav = document.querySelector('.nav');

//indicamos un evento para el nav-toggle, con el evento click
navToggle.addEventListener("click",() =>{

   //cuando se haga click en el nav-toggle
   //el nav se mostrara con todos sus links
   nav.classList.toggle(".nav--visible");
})