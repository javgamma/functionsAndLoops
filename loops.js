/* 1.1.- Itera del 0 al 10 usando un bucle "for" e imprime cada número por consola.
 1.2.-  Haz lo mismo con un bucle "while".
1.3.- Haz lo mismo del 83 al 24 (bucle "for" y bocle "while"). */


//1.1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//1.2 

let j = 0;
while (j <= 10) {
    console.log("Jota",j);
    j++;
}

// 1.3 FOR

for (let k = 83; k >= 24; k--) {
    console.log("Ka",k);
}

// 1.3 while 

let m = 83;
while (m >= 24) {
    console.log("Eme",m);
    m--;
}


// 2.- Crea la variable "num" y haz que un bucle "for" imprima la tabla de multiplicar de ese número (del 0 al 10) en la consola, siguiendo el siguiente formato:

// num x 0 = 0
// num x 1 = num * 1
// num x 2 = num * 2
// etc...

let num = 5;
for (let i = 0; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}


//4.- Imprime por consola, , la suma de todos los números del 0 al 10.

let addition = 0;

for (let i = 0; i <= 10; i++) {
    addition += i;
}

console.log("La suma de todos los números del 0 al 10 es:", addition);