let opcao = Number(prompt(("O que vai ser pra hoje:" + "\n1 = Abastecer com gasolina; \n2 = Abastecer com alcool; \n3 = Calibrar os pneus")))

switch (opcao) {
    case 1: 
        let litros = Number(prompt("Qual o valor que voce gotaria?"))
        let preco = 5
        let abastecido = litros / preco
        console.log("Voce abasteceu " + abastecido + "L de gasolina.")
        break;

    case 2:
        let litrosalcool = Number(prompt("Qual o valor que voce gotaria?"))
        let precoalcool = 3
        let abastecidoalcool = litrosalcool / precoalcool
        console.log("Voce abasteceu " + abastecidoalcool + "L de alcool.")
        break;

    default:
        console.log("Pneus calibrados com sucesso.")
        break;
}