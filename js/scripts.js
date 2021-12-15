// querySelector
const heading = document.querySelector('.header__text h2'); //Retorna 0 o un elemento
heading.textContent = 'New Heading';
console.log(heading);


// querySelectorAll
const links = document.querySelectorAll('.navegation a');
console.log(links);

links[0].textContent = 'New Text Link';
links[0].classList.add('new-class');
//links[0].classList.remove('navegation__link');


//getElementById funciona igual que los anteriores solo cambia la forma de seleccionarlo

const heading2 = document.getElementById('#heading');



//Generar un nuevo link.
const newLink = document.createElement('A');

//Agregar Href
newLink.href = 'new-link.html';
//Agregar Text
newLink.textContent = 'Shop';
//Agregar Class
newLink.classList.add('navegation__link')
//Agregarlo al documento
const navegation = document.querySelector('.navegation');
navegation.appendChild(newLink);




console.log(newLink);