<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
    <script>
        console.log("Hola mundo");
    </script>
</head>
<body>
    <button onclick="alert('Hola mundo')">Click</button>
    <script src="script.js"></script>
    
</body>
</html>

// string o cadena de texto
let names="José Reyes";
//int o entero o number
let age = 29;
//boolean true or false
let status = true;
//float o decimal
let dolar = 3.62;


console.log("hola" + names);
console.log("Tengo" + age + "años")
console.log(status);
console.log(dolar)

names = 25;

console.log(names + 2);

//ELEVACIÓN
let dog = "rocky";

function getDog(){
    alert(dog);
    console.log(dog);
}

getDog();

const PI = 3.1416;

console.log(PI);

PI = 3.15;

console.log(PI);

let variable = false;

console.log(typeof variable);

var number1 ="15.5";

console.log(parseFloat(number1) + 5);

var nombre = 20;

var nombre2 = nombre.toString();

console.log(typof(nombre2));

var nombre = "José Reyes"

//CONVERTR A MAYUSCULA
console.log(nombre.toUpperCase());
//CONVERTIR A MINÚSCULA
console.log(nombre.toLowerCase());
//MOSTRAR LA PRIMEA LETRA
console.log(nombre.charAt(7));
//CANTIDAD DE CARACTERES
console.log(nombre.length);

console.log(nombre.charAt(nombre.length-1));
//CANTIDAD DE CARACTERES
console.log(nombre.length);
