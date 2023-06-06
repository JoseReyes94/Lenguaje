var edad = 27

//edad = edad + 1;
edad += 1;
console.log(edad)

var peso = 75;
peso -= 2;

var sandwich =1;
peso -= sandwich

var jugarALfutbol = 3;

peso -= jugarALfutbol;

console.log(peso);

var preciovino = 200.3

//var total = preciovino*3
//var total = preciovino*100*3/100;

var total = Math.round(preciovino*100*3)/100
var totalStr = total.toFixed(2)
var total2 = (parseFloat(totalStr));

console.log(total);
console.log(totalStr);
console.log(total2);

var pizza = 8;
var persona = 2;
var cantidadPORCIONESpersona = 8/2;
console.log(cantidadPORCIONESpersona);

const PI = 3.1416;
console.log(PI)

var nombre = 'Jose', edad = 28;

function inprimirEdad(){
    console.log(`${nombre} tiene ${edad} años `)
}

inprimirEdad();
inprimirEdad(nombre,edad);
inprimirEdad("Jose", 28);
inprimirEdad("Ana", 21);

function sumar (a,b){
    var total = a + b;
    return total;
}

var totalSuma = sumar(14,15);
console.log(totalSuma);

var nombreJosé = 'José'
function inprimirnombreEnMayusculas(nombre){
    nombre = nombre.toUpperCase();
    console.log(nombre);

}

inprimirnombreEnMayusculas(nombreJosé)


var persona2 = {
    nombre: 'José',
    apellido: 'Reyes',
    edad: 29
}
function imprimirnombreEnMayusculas(obj){
var name = obj.nombre.toUpperCase();
    console.log(name);
}

imprimirnombreEnMayusculas(persona2)

var persona2 = {
    nombre: 'José',
    apellido: 'Reyes',
    edad: 29
}
    
function imprimirnombreEnMayusculas(obj) {
        //var nombre = objeto nombre
        var {nombre,apellido} = obj;
        console.log(nombre + " " + apellido);
        } 

        var persona2 = {
            nombre: 'José',
            edad: 29
        }

function inprimirnombreyEdad(obj) {
    var {nombre,edad} = obj;
    console.log("Hola, me llamo " +  nombre + " tengo " + edad + " años");
        } 

        inprimirnombreyEdad(persona2)
