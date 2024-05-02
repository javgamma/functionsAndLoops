/* 1.- Escribe una función que acepte la medida de los 
dos lados de un rectángulo y devuelva el área de dicho rectángulo.
 Si no se le pasa ningún parámetro, los lados deberán ser, 
 por defecto, 5 y 3. Puedes usar prompts para los datos (opcional) y
 la consola del navegador para comprobar el resultado.
 */
 

 let sideArectangle = parseInt(prompt("Ingresa un numero"))
 let sideBrectangle = parseInt(prompt("Ingresa un numero "))
  


 function areaRectangle(a,b) {
    return a * b;
 }

 console.log(areaRectangle(sideArectangle, sideBrectangle));

 
//  2.- Escribe una función que acepte grados Celsius y
//   devuelva la conversión a grados Fahrenheit.
// (0°C × 9/5) + 32 = 32°F

// Grados Fahrenheit = (grados celsius × 9/5) +32.




function degreesCelsiustoFahrenheit(degreesC) {
    return (degreesC*9/5)+32;
} 

console.log(degreesCelsiustoFahrenheit(6));



// /*3.- Escribe una función que acepte dos números, un mínimo y un máximo, y devuelva un número aleatorio entre dichos números. Para ello, tendrás que descubrir cómo funciona el método Math.random().*/

let userFirstNumber= parseInt(prompt("Ingresa tu primer numero"));
let userSecondNumber = parseInt(prompt(" Ingresa el segundo numero"));


let maximum = Math.max(userFirstNumber,userSecondNumber)
let minimum = Math.min(userFirstNumber,userSecondNumber)

function randomNumber(x,y) { 
    return Math.floor(Math.random() * (minimum,maximum)+minimum)
}

console.log("Minimo",minimum);
console.log("Maximo",maximum);
console.log("random",randomNumber(userFirstNumber,userSecondNumber));




/*
4.- Escribe una función que calcule el área de un círculo si se le proporciona el radio.

// El area de un circulo es pi x r^2

/* Hacemos un prompt para que el usuario nos de el radio */

let userRadiusCircle = parseInt(prompt("Ingresa la longitud de radio de tu circulo"))

function areaCircle(radius) {
    return parseFloat((Math.PI*(radius)**2));   
}

console.log(areaCircle(userRadiusCircle)); 


// 5.- Escribe una función que te adivine el futuro. Recibirá como parámetros:
// Número de hijos.
// Nombre de la pareja.
// Nombre de una ciudad.
// Un trabajo. La función devolverá "Trabajarás en <<ciudad>>, trabajando como <<trabajo>>, y tendrás <<número de hijos>> hijos con <<pareja>>.". Deberás usar template literals para ello.



let numberOfSons = randomNumber(0,15);

let wifesName = ["María", "Laura", "Ana", "Sofía", "Lucía", "Paula", "Marta", "Carmen", "Sara", "Andrea", "Elena", "Isabel", "Claudia", "Natalia", "Rosa"];

let nameCity = ["Bogota", "Londres", "París", "Nueva York", "Sidney", "Roma", "Barquisimeto", "Madrid", "Berlín", "Toronto", "Moscú", "Caracas", "San Francisco", "Barcelona", "Medellin", "Ciudad de México"];

let jobFuture = ["Ingeniero civil", "Médico", "Abogado", "Profesor", "Diseñador gráfico", "Chef", "Arquitecto", "Periodista", "Programador de software", "Contador", "Actor", "Científico de datos", "Enfermero", "Piloto", "Psicólogo", "Electricista", "Astrónomo", "Veterinario", "Empresario", "Traductor"];




function futureGuessing(numberOfSons, wifesName, nameCity, jobFuture) {

    let randomNumberOfSons = randomNumber(0, 15);
    let randomWifesName = wifesName[randomNumber(0, wifesName.length - 1)];
    let randomCity = nameCity[randomNumber(0, nameCity.length - 1)];
    let randomJob = jobFuture[randomNumber(0, jobFuture.length - 1)];


    return `Trabajarás en ${randomCity}, trabajando como ${randomJob}, y tendrás ${randomNumberOfSons} hijos con ${randomWifesName}.`;
}

console.log(futureGuessing(numberOfSons,wifesName,nameCity,jobFuture));



