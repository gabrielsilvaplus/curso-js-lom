/* 
O objeto Date() em JavaScript é usado para trabalhar com datas e horas. Ele fornece métodos para obter e definir informações sobre datas e horários específicos. Aqui estão algumas maneiras comuns de trabalhar com o objeto Date():
*/


const data = new Date();
console.log(data.toString()); //Representa a data e hora atuais.

var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; // Os meses são indexados a partir de zero, então somamos 1
var ano = dataAtual.getFullYear();
console.log(dia, mes, ano);


//Obter o dia da semana
var dataAtual = new Date();
var diaSemana = dataAtual.getDay(); // 0 (Domingo) a 6 (Sábado)
console.log(diaSemana);

//Definindo uma data específica
var dataEspecifica = new Date(2024, 2, 18); // (ano, mês, dia)
console.log(dataEspecifica);

//Formatando uma data 
var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; // Os meses são indexados a partir de zero, então somamos 1
var ano = dataAtual.getFullYear();

var dataFormatada = dia + '/' + mes + '/' + ano;
console.log(dataFormatada);

//Trabalhando com horas
var dataAtual = new Date();
var hora = dataAtual.getHours();
var minuto = dataAtual.getMinutes();
var segundo = dataAtual.getSeconds();

var horaFormatada = hora + ':' + minuto + ':' + segundo;
console.log(horaFormatada);