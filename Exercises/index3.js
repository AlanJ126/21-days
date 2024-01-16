let num1 = Number(prompt("Digite o primeiro numero:"))
let num2 = Number(prompt("Digite o segundo numero:"))
let operaco = Number(prompt("Qual operacao voce deseja: 1 = +; 2 =  -; 3 = /; 4 = *"))

switch (operaco) {
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break;
    case 3:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
        break;
    default:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break;
}