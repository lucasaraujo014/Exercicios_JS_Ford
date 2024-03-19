let nomes = [];

// Ler os nomes das 10 pessoas
nomes.push(prompt("Digite o nome da primeira pessoa:"));
nomes.push(prompt("Digite o nome da segunda pessoa:"));
nomes.push(prompt("Digite o nome da terceira pessoa:"));
nomes.push(prompt("Digite o nome da quarta pessoa:"));
nomes.push(prompt("Digite o nome da quinta pessoa:"));
nomes.push(prompt("Digite o nome da sexta pessoa:"));
nomes.push(prompt("Digite o nome da sétima pessoa:"));
nomes.push(prompt("Digite o nome da oitava pessoa:"));
nomes.push(prompt("Digite o nome da nona pessoa:"));
nomes.push(prompt("Digite o nome da décima pessoa:"));

// Ler o nome para busca
const nomeBusca = prompt("Digite o nome que deseja buscar:");

// Verificar se o nome está na lista
if (nomeBusca === nomes[0] || nomeBusca === nomes[1] || nomeBusca === nomes[2] ||
    nomeBusca === nomes[3] || nomeBusca === nomes[4] || nomeBusca === nomes[5] ||
    nomeBusca === nomes[6] || nomeBusca === nomes[7] || nomeBusca === nomes[8] ||
    nomeBusca === nomes[9]) {
    alert("ACHEI! O nome está na lista.");
} else {
    alert("NÃO ACHEI! O nome não está na lista.");
}

// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes
// lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de
// pessoa (para efetuar uma busca) e depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

