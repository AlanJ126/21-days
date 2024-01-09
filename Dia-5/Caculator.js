let n1 = parseInt(prompt ("Primeiro número:"))
let n2 = parseInt(prompt ("Segundo número? "))
let conta = parseInt(prompt("Qual tipo de operacao matematica voce deseja realizar?" + "\n1 = +; \n2 = -; \n3 = *; \n4 = /" ))


switch(conta){
    case 1:
        console.log(n1 + " + " + n2 + " = " + (n1 + n2))
        break;
    case 2:
        console.log(n1 + "-" + n2 + "=" + (n1 - n2))
        break;     
    case 3:
        console.log(n1 + "*" + n2 + "=" + (n1 * n2))
        break;
    default: 
        console.log(n1 + "/" + n2 + "=" + (n1 / n2) )
        break;
}