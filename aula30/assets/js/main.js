function escopo(){
    // Arrays com os nomes dos meses e dias da semana em português
    var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    var diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    // Obtém a data atual
    var dataAtual = new Date();

    // Obtém o dia da semana como um número de 0 (domingo) a 6 (sábado)
    var indiceDiaSemana = dataAtual.getDay();

    // Obtém o nome do dia da semana a partir do array
    var diaDaSemana = diasDaSemana[indiceDiaSemana];

    // Obtém o mês como um número de 0 (janeiro) a 11 (dezembro)
    var indiceMes = dataAtual.getMonth();

    // Obtém o nome do mês a partir do array
    var nomeMes = meses[indiceMes];

    // Formata a data
    var dia = dataAtual.getDate();
    var ano = dataAtual.getFullYear();
    var hora = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();

    // Adiciona zeros à esquerda para garantir que tenham dois dígitos
    if (dia < 10) {
        dia = '0' + dia;
    }
    if (hora < 10) {
        hora = '0' + hora;
    }
    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    // Cria a string da data formatada no formato desejado
    var dataFormatada = dia + ' de ' + nomeMes + ' de ' + ano + ', ' + hora + ':' + minutos;

    // Insere a data formatada, o dia da semana, o mês e a hora no elemento HTML com o id "data-dia-semana-mes-hora"
    document.getElementById("data").innerHTML = "Hoje é " + diaDaSemana + ", " + dataFormatada;
}

console.log(escopo())