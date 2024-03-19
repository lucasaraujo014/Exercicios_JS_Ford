const precoGasolina = 5.30;
const precoAlcool = 4.90;

// Ler o tipo de combustível e a quantidade de litros
const tipoCombustivel = prompt("Digite o tipo de combustível (A para álcool, G para gasolina):");
const quantidadeLitros = parseFloat(prompt("Digite a quantidade de litros desejada:"));

// Calcular o valor a ser pago pelo cliente
let valorAPagar;

switch (tipoCombustivel.toUpperCase()) {
    case 'A':
        if (quantidadeLitros <= 20) {
            valorAPagar = quantidadeLitros * (precoAlcool - (precoAlcool * 0.03));
        } else {
            valorAPagar = quantidadeLitros * (precoAlcool - (precoAlcool * 0.05));
        }
        break;
    case 'G':
        if (quantidadeLitros <= 20) {
            valorAPagar = quantidadeLitros * (precoGasolina - (precoGasolina * 0.04));
        } else {
            valorAPagar = quantidadeLitros * (precoGasolina - (precoGasolina * 0.06));
        }
        break;
    default:
        alert("Tipo de combustível inválido!");
        break;
}

// Exibir o valor a ser pago pelo cliente
alert("O valor a ser pago é: R$" + valorAPagar.toFixed(2));

// Um posto está vendendo combustíveis com a seguinte tabela de descontos:



// Álcool:
// . até 20 litros, desconto de 3% por litro Álcool
// . acima de 20 litros, desconto de 5% por litro

// Gasolina:
// . até 20 litros, desconto de 4% por litro Gasolina
// . acima de 20 litros, desconto de 6% por litro

// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado
// da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente
// sabendo-se que o preço do litro da gasolina é R$ 5,30 e o preço do litro do álcool é R$ 4,90.

// Dica: utilize switch case, operadores lógicos e relacionais e estrutura de condição para otimizar o algorítimo.


//entrada de dados
// = selecionar se deseja abastecer com alcool ou com gasolina;
// = selecionar a quantidade de litros que o usuário deseja;

//processamento de dados
// = switch case para gasolina ou alcool

//saida de dados
// = mostrar a porcentagem de desconto se for alcool ou se for gasolina