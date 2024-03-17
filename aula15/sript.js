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
