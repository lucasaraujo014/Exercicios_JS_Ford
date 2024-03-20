const nomeProduto = prompt("Digite a descrição do produto:");
const quantidadeAdquirida = parseInt(prompt("Digite a quantidade adquirida:"));
const precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));

// Processamento de dados
let total = quantidadeAdquirida * precoUnitario;
let desconto;

if (quantidadeAdquirida <= 5) {
    desconto = total * 0.02;
} else if (quantidadeAdquirida > 5 && quantidadeAdquirida <= 10) {
    desconto = total * 0.03;
} else {
    desconto = total * 0.05;
}

const totalAPagar = total - desconto;

// Saída de dados
alert("Produto: " + nomeProduto +
      "\nQuantidade: " + quantidadeAdquirida +
      "\nPreço unitário: R$" + precoUnitario.toFixed(2) +
      "\nTotal: R$" + total.toFixed(2) +
      "\nDesconto: R$" + desconto.toFixed(2) +
      "\nTotal a pagar: R$" + totalAPagar.toFixed(2));

// Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o
// preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o
// desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:



// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%

// Dica: utilize if / else if / else


//entrada de dados
// = criar variável para receber o nome do produto 
// = perguntar ao usuário qual vai ser a quantidade de produtos
// = perguntar o preço unitário do produto

//processamento de dados
// = realizar o calculo do total da quantidade do produto * valor unitário do produto 
// = realidar o calculo do desconto com base na quantidade de produtos que o usuário vai comprar

//saída de dados
// = mostrar a saída dos produtos que ela escolher e a quantidade e o preço de cada produto
// = mostrar também o desconto de cada produto