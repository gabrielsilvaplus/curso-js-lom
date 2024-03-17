//Operadores de comparação

// Declaração de variáveis
let a = 5;
let b = 10;
let c = "5";
let d = 5;

// Operador igual (==)
console.log("Operador igual (==):", a == b); // false
console.log("Operador igual (==):", a == d); // true
console.log("Operador igual (==):", a == c); // true (conversão de tipo implícita)

// Operador não igual (!=)
console.log("Operador não igual (!=):", a != b); // true
console.log("Operador não igual (!=):", a != d); // false
console.log("Operador não igual (!=):", a != c); // false (conversão de tipo implícita)

// Operador estritamente igual (===)
console.log("Operador estritamente igual (===):", a === b); // false
console.log("Operador estritamente igual (===):", a === d); // true
console.log("Operador estritamente igual (===):", a === c); // false

// Operador estritamente não igual (!==)
console.log("Operador estritamente não igual (!==):", a !== b); // true
console.log("Operador estritamente não igual (!==):", a !== d); // false
console.log("Operador estritamente não igual (!==):", a !== c); // true

// Maior que (>)
console.log("Maior que (>):", a > b); // false
console.log("Maior que (>):", b > a); // true

// Maior ou igual que (>=)
console.log("Maior ou igual que (>=):", a >= b); // false
console.log("Maior ou igual que (>=):", b >= a); // true
console.log("Maior ou igual que (>=):", a >= d); // true

// Menor que (<)
console.log("Menor que (<):", a < b); // true
console.log("Menor que (<):", b < a); // false

// Menor ou igual que (<=)
console.log("Menor ou igual que (<=):", a <= b); // true
console.log("Menor ou igual que (<=):", b <= a); // false
console.log("Menor ou igual que (<=):", a <= d); // true
