let nome = prompt("Qual é seu nome?")
let idade = parseInt(prompt("Qual a sua idade?"))
let altura = Number(prompt("Qual a sua altura?"))
let peso = Number(prompt("Qual o seu peso?"))
let anonasc = idade - 2023
let imc = peso / (altura*altura)

console.log ( "Olá " + nome + ", voce tem " + idade + " anos, nasceu em " + anonasc + ", tem " + altura + " de altura, pesa " + peso + "Kg seu IMC é " + imc + "Kg/m2")