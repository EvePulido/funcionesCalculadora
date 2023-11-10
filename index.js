
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
    resultado = input1 + input2;
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
