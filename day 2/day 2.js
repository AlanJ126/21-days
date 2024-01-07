nome = prompt ("Qual seu nome?")
idade = parseInt(prompt("Qual a sua idade?"))
peso = parseFloat(prompt("Qual seu peso?"))
altura = parseFloat(prompt("Qual sua altura"))

anoNasc =  2023 - idade
imc = peso / (altura*altura)
imc = Number(imc.toFixed(2));

console.log ("olá " + nome + ", voce tem " + idade + " anos, nasceu em " + anoNasc + " , tem " + altura + " de altura, pesa " + peso + "Kg seu imc é " + imc + "Kg/m.") 