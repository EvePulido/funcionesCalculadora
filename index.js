
// Estructuras de control
// Condicionales y ciclos
// while, do while, for

    // indice ; condicional ; incremento o decremento
//  for (let index = 1; index < 6; index++) {
//     if (index == 3) {
//         continue;
//     }
//     console.log(index);
//     debugger; // ver como funciona el código paso por paso
//  }

// Funciones (métodos)

// function suma(a,b,c){
//     return a+b+c;

// }
// const numero = [5,6,7];

// let resultadoDeLaFuncion = suma (...numero);
// console.log(resultadoDeLaFuncion);

// function funcionSaludar(nombre){
//     console.log('Hola '+nombre+' desde una arrow');
// }

// funcionSaludar('Kaleb');

// let hola = function (nombre) {
//     console.log('Hola '+nombre+' desde una arrow');
// }

// hola('Damarys');

//arrow function, funciones flecha, lambda, fat arrow
// No es necesario poner {} cuando solo se tiene una línea de código

// numero += numero;

// let holaArrow = (nombre) => console.log('Hola '+nombre+' desde una arrow');

// holaArrow('Evelyn');

// function callbackevelyn(a,b, saludo()=>{console.log('hola evelyn'));}

// para que las funciones anonimas se ejecuten deben asignarse a una variable


// un parametro es una o varias variables que van a introducirse a la funcion hacer un proceso


function suma(input1,input2) {
    input1 = parseInt(document.getElementById("numero1").value);
    input2 = parseInt(document.getElementById("numero2").value);
    let resultado = input1 + input2;
    document.getElementById("espacioResultado").innerHTML = resultado;
}

function resta(input1,input2) {
    input1 = parseInt(document.getElementById("numero1").value);
    input2 = parseInt(document.getElementById("numero2").value);
    resultado = input1 - input2;
    document.getElementById("espacioResultado").innerHTML = resultado;
}

function multiplicacion(input1,input2) {
    input1 = parseInt(document.getElementById("numero1").value);
    input2 = parseInt(document.getElementById("numero2").value);
    resultado = input1 * input2;
    document.getElementById("espacioResultado").innerHTML = resultado;
}

function division(input1,input2) {
    input1 = parseInt(document.getElementById("numero1").value);
    input2 = parseInt(document.getElementById("numero2").value);
    resultado = input1 / input2;
    document.getElementById("espacioResultado").innerHTML = resultado;
}

function limpiar () {
    document.getElementById("formulario").reset ();
}

let boton = document.querySelector('.botonClick');

// Eventos del mouse
                       // evento que va a escuchar , la funcion que va a ejecutarse
boton.addEventListener('click', function() {
    console.log('Dimos clic en el botón.');
    boton.classList.add('botonVerde'); //.add cambia la clase, lo corre y ya no modifica nada, .toggle hace el cambio entre clases
});

boton.addEventListener('mouseover', function() {
    console.log('Estamos sobre el botón');
    
});

boton.addEventListener('mouseout', function() {
    console.log('Salí del botón');
    
});

// Eventos en el teclado

window.addEventListener('keydown', (e) =>{
    console.log('Pulsó una teclado');
    console.log(String.fromCharCode(e.keyCode));
});

window.addEventListener('keypress', (e) =>{
    console.log('Presioné una tecla');
});

window.addEventListener('keyup', (e) =>{
    console.log('Dejé de presionar una letra');
});

window.addEventListener('load', () =>{
    console.log('Terminé de cargar la página.');
});

// let botonAgregar = document.querySelector('.botonAgregar');
// botonAgregar.addEventListener('click', function() {
   
// });