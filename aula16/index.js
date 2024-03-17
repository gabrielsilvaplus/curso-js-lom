
const nome = 'Gabriel Pereira'
const alunos = ['Luiz', 'Maria', 'João'];
alunos[0] = 'Eduardo'

delete alunos[1]; // Remove um item especifico da lista deixando vazia
alunos.pop();// Remove o ultimo item da lista
alunos.shift(); // Remove o primeiro item da lista


console.log(alunos)
alunos.unshift('Gabriel');//Adiciona o item ao começo
alunos.push('IRINEU');//Adiciona o item ao fim da lista
console.log(alunos)
console.log(typeof alunos)
console.log(alunos instanceof Array)

/* console.log(alunos)
console.log(alunos[0]);
console.log(alunos[1]);
 */
