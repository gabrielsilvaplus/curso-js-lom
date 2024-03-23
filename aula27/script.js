/* 
Neste exemplo, a condição é idade >= 18. Se essa condição for verdadeira, a string "Adulto" será atribuída à variável status. Caso contrário, a string "Menor de idade" será atribuída.

O operador ternário é útil para escrever código mais conciso e legível, especialmente em situações onde você precisa fazer uma escolha simples com base em uma condição. No entanto, seu uso excessivo pode tornar o código menos legível, portanto, use-o com moderação e bom senso.
*/

const idade = 20;
var status = (idade >= 18) ? "ADULTO" : "MENOR DE IDADE"
console.log(status);
