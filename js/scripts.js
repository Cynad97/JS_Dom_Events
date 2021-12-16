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

//Events

// console.log(1);

// //Windows hace referencia a todas las funciones, es un nivel mas alto que document.
// window.addEventListener('load',function(){ //Load espera a que el JS y los archivos que depende del HTML esten listos.
//     console.log(2);
// });

// window.onload = function() {
//     console.log(3);
// }

// //Usualmente usamos DOM porque no vamos a modificar CSS con JavaScript.
// document.addEventListener('DOMContentLoaded', function(){ //DOMContentLoaded Solamente espera a que se descargue el HTML, no espera a CSS ni imagenes.
//     console.log(4);
// });


// console.log(5);

// window.onscroll = function(){
//     console.log('Scrolling...');
// }


//Seleccionar elementos y asociarle un evento


// const btnSend = document.querySelector('.button--primary');
// btnSend.addEventListener('click', function(event){ //Event, generar una variable asi te muestra una informacion mas completa del evento.
//     console.log(event);
//     event.preventDefault(); //Estamos previniendo que se envie, esto sirve para validar un formulario.
//     console.log('Sending formulary...');
// });



//Eventos de los Inputs y TextArea.

const data = {
    name: '',
    email: '',
    message: ''
}

//Tienen que tener el mismo nombre de los ID para que funcione.

const nameInput= document.querySelector('#name');
const mailInput= document.querySelector('#email');
const messageInput= document.querySelector('#message');
const formulary = document.querySelector('.formulary');

nameInput.addEventListener('input', print);
mailInput.addEventListener('input', print);
messageInput.addEventListener('input', print);

//Submit Event, el submit esta asociado al formulario por eso hay que seleccionarlo.

formulary.addEventListener('submit', function(event){
    event.preventDefault();
    //Validar formulario.
    const {name, email, message} = data;
    if(name === '' || email === '' || message === ''){
        showAlert('All fields are required', true);
        return; //Corta la ejecucion del codigo.
    } 
    //Crear alerta de envio correctamente.
    showAlert('Sent Successfully');
    
    //Enviar forumlario.
    console.log('Sending Formulary...')
});

function print(event){
    //console.log(event.target.value);
    data[event.target.id] = event.target.value;
    console.log(event.target);
    console.log(data);
}

function showAlert(message, error = null) {
    const alert = document.createElement('P');
    alert.textContent = message;
    if(error){
        alert.classList.add('error');
    } else{
        alert.classList.add('sentSuccessfully')
    }

    formulary.appendChild(alert);
    //Desaparezca despues de 5 segudnos.
    setTimeout(() => {
        alert.remove(); 
    }, 5000);

}

//Muestra un error en pantalla.
// function printError(messageError) {
//     const error = document.createElement('P');
//     error.textContent = messageError;
//     error.classList.add('error');
    
//     formulary.appendChild(error);

//     //Desaparezca despues de 5 segudnos.
//     setTimeout(() => {
//        error.remove(); 
//     }, 5000);
// }

// //Muestra un mensaje de que se envio correctamente.
// function printSent(sentSuccessfully) {
//     const sent = document.createElement('P');
//     sent.textContent = sentSuccessfully;
//     sent.classList.add('sentSuccessfully');
    
//     formulary.appendChild(sent);

//     //Desaparezca despues de 5 segudnos.
//     setTimeout(() => {
//         sent.remove(); 
//     }, 5000);
// }



