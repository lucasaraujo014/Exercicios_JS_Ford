// Entrada de dados
const time1 = prompt("Digite o nome do primeiro time:");
const time2 = prompt("Digite o nome do segundo time:");
const placarTime1 = parseInt(prompt("Digite a quantidade de gols do " + time1 + ":"));
const placarTime2 = parseInt(prompt("Digite a quantidade de gols do " + time2 + ":"));

// Processamento
let resultado;

if (placarTime1 > placarTime2) {
    resultado = "Vitória do " + time1;
} else if (placarTime2 > placarTime1) {
    resultado = "Vitória do " + time2;
} else {
    resultado = "Empate";
}

// Saída
alert(`Resultado: " ${placarTime1} x ${placarTime2} ${resultado}`);


// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.


//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo


//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram

//saida
// = informar o resultado do jogo de futebol