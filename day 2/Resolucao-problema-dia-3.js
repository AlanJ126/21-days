// Declaração de variáveis
let nome = "";
let idade = 0;
let altura = 0;
let peso = 0;

// Solicitando informações ao usuário e atribuindo os valores às variáveis
nome = prompt("Digite seu nome: ");
idade = parseInt(prompt("Digite sua idade: "));
altura = parseFloat(prompt("Digite sua altura: "));
peso = parseFloat(prompt("Digite seu peso: "));

// Calculando o ano que a pessoa nasceu e o IMC
let anoNasc = 0;
anoNasc = 2024 - idade; // Corrigi o ano atual de 2023 para 2024

let imc = 0;
imc = peso / (altura * altura);

// Exibindo as informações no console
console.log(
  "Olá " +
    nome +
    ", você tem " +
    idade +
    " anos, nasceu em " +
    anoNasc +
    ", tem " +
    altura +
    " de altura, pesa " +
    peso +
    "kg e seu IMC é " +
    imc.toFixed(2) // Limitando o número de casas decimais do IMC para 2
);
