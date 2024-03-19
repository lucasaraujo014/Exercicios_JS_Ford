const valorTotalCompra = parseFloat(prompt("Qual é o valor total da compra?"));
const codigoCliente = parseInt(prompt("Digite o código do cliente (1 para comum, 2 para funcionário, 3 para VIP):"));

// Definir a taxa de desconto com base no código do cliente
let taxaDesconto = 0;

switch (codigoCliente) {
    case 2:
        taxaDesconto = 0.1; // 10% de desconto para funcionários
        break;
    case 3:
        taxaDesconto = 0.05; // 5% de desconto para clientes VIP
        break;
    default:
        break; // Nenhum desconto para clientes comuns
}

// Calcular o valor total a ser pago
const valorDesconto = valorTotalCompra * taxaDesconto;
const valorTotalPago = valorTotalCompra - valorDesconto;

// Exibir o valor total a ser pago
alert("O valor total a ser pago é: R$" + valorTotalPago.toFixed(2));


// Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
// valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).





//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
// = informar o total da compra 

//processamento de dados
// = usar a estrutura switch case para determinar se é cliente, funcionário ou vip

//saída de dados
// = se for cliente não haverá desconto
// = se for funcionário terá 10% de desconto
// = se for vip terá 5% de desconto