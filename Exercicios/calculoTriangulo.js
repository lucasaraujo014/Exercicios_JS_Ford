const pl = prompt("Qual é o primeiro lado do triângulo? ");
const sl = prompt("Qual é o segundo lado do triângulo? ");
const tl = prompt("Qual é o terceiro lado do triângulo? ");

if (pl === sl && sl === tl) {
    alert("Seu triângulo é Equilátero");
} else if (pl !== sl && sl !== tl && pl !== tl) {
    alert("Seu triângulo é Escaleno");
} else {
    alert("Seu triângulo é Isósceles");
}



// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.




//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console