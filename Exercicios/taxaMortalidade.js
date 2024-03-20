// Entrada de dados
const opcao = prompt("Digite 'N' para calcular a taxa de natalidade ou 'M' para calcular a taxa de mortalidade:");
const numeroHabitantes = parseInt(prompt("Digite o número de habitantes:"));

let indicador, taxa;

// Processamento de dados
switch (opcao.toUpperCase()) {
    case 'N':
        const numeroCriancas = parseInt(prompt("Digite o número de crianças nascidas:"));
        indicador = "natalidade";
        taxa = (numeroCriancas * 1000) / numeroHabitantes;
        break;
    case 'M':
        const numeroObitos = parseInt(prompt("Digite o número de óbitos:"));
        indicador = "mortalidade";
        taxa = (numeroObitos * 1000) / numeroHabitantes;
        break;
    default:
        alert("Opção inválida!");
        break;
}

// Saída de dados
if (indicador) {
    alert("A taxa de " + indicador + " é: " + taxa.toFixed(2));
}

// A taxa de natalidade e a taxa de mortalidade são indicadores estatísticos de fundamental importância por ajudar a compreender aquilo que os especialistas chamam de dinâmica populacional e a entender sua relação com variáveis que influenciam o desenvolvimento, como qualidade de vida, migrações, , fatores socioeconômicos e localização. Sabendo disso, crie um programa que calcule os dois indicadores utilizando o comando switch.



// Observação : A taxa de natalidade é calculada pela seguinte fórmula: taxa de natalidade = (número de crianças nascidas x 1000) / número de habitantes;
// Enquanto que, a taxa de mortalidade = (números de óbitos x 1000) /número de habitantes.

//olá!

//entrada de dados
// verificar o que o usuario vai querer calcular (natalidade ou mortalidade)
// determinar o número de crianças nascidas e o número de habitantes para natalidade
// determinar o número de óbitos e o número de habitantes para mortalidade

//processamento de dados
// realizar o calculo de natalidade e mortalidade 
// determinar com switch case se o usuario vai querer calcular natalidade ou mortalidade

//saída de dados
// imprimir na tela a taxa de mortalidade ou natalidade