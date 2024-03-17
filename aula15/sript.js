const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
raiz.innerHTML = `<p> A raiz de quadrada de ${numero} é :${Math.sqrt(numero)} </p>`;
einteiro.innerHTML = `<p> Seu número ${numero} é inteiro: ${Number.isInteger(numero)} </p>`;
enan.innerHTML = `<p>  É NaN: ${isNaN(numero)} </p>`;
arrebaixo.innerHTML = `<p> Arredondando para baixo: ${Math.floor(numero)} </p>`;
arrecima.innerHTML = `<p> Arredondando para cima: ${Math.ceil(numero)} </p>`;
casadecimal.innerHTML = `<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`;

// let num2 = Math.floor(num1);
// let num2 = Math.ceil(num1);
// let num2 = Math.round(num1);
// console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
// console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));
// const aleatorio = Math.round(Math.random() * (10 - 5) + 5);