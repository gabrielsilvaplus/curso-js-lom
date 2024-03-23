/* 
Use switch/case quando:

    Você tem uma única expressão para avaliar em diferentes casos.
    Existem várias condições que dependem do mesmo valor.
    Há uma clara correspondência um-para-um entre os valores de entrada e as ações a serem executadas.

Em geral, if/else é mais flexível e pode lidar com uma variedade maior de situações, enquanto switch/case é mais limpo e legível em certos cenários, especialmente quando há muitas opções e a lógica pode ser estruturada de forma mais linear.

*/
let diaDaSemana = 3;

switch (diaDaSemana) {
    case 1:
        console.log("Hoje é segunda-feira");
        break;
    case 2:
        console.log("Hoje é terça-feira");
        break;
    case 3:
        console.log("Hoje é quarta-feira");
        break;
    case 4:
        console.log("Hoje é quinta-feira");
        break;
    case 5:
        console.log("Hoje é sexta-feira");
        break;
    case 6:
        console.log("Hoje é sábado");
        break;
    case 7:
        console.log("Hoje é domingo");
        break;
    default:
        console.log("Dia inválido");
        break;
}
