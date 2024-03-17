/* 
Primitivos(imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valor

Referência (mutável) - array, object, function
*/

const a = {
    nome: 'Gabriel',
    sobrenome: 'Pereira'
};

const b = a;

b.nome = 'João';
console.log(b)
console.log(a)
