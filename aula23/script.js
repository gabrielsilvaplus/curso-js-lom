let a = 5;
let b = 10;

// Neste exemplo, se "a" for menor que 10, então "b" é verificado.
// Se "a" for maior ou igual a 10, a expressão inteira já será falsa.
if (a < 10 && b > 5) {
    console.log("Ambas as condições são verdadeiras");
} else {
    console.log("Pelo menos uma das condições é falsa");
}



let c = 15;
let d = 20;

// Neste exemplo, se "c" for maior que 10, então "d" não é verificado.
// Se "c" for menor ou igual a 10, a expressão inteira já será verdadeira.
if (c > 10 || d < 5) {
    console.log("Pelo menos uma das condições é verdadeira");
} else {
    console.log("Ambas as condições são falsas");
}
