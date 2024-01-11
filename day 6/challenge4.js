let numero = parseInt(prompt("Digite um número positivo"))

for (let i = numero; i <= numero +2; i ++){
    console.log( "Tabuada do " + i)
    
    for ( let j = 0; j <= 10; j ++){
    console.log(i + " x " + j + " = " + (i*j))
    }    
}
