let mediageral = 0
let qthomens = 0
let quantmulhersacimad7 = 0
let maiornotahomem = 0
let contador = 0 


while(contador <= 10){
    nota = parseInt(prompt("Digite a nota do " + contador +  " aluno." ))
    sexo = prompt( "Digite o sexo do aluno (M/F)")

    if (sexo  == "m"){
        if (nota  > maiornotahomem){
            maiornotahomem = nota
        }
        qthomens ++
    }

    if ( sexo == "f" && nota > 7){
        quantmulhersacimad7 ++
    }
mediageral += nota
contador ++
    
}

mediageral = mediageral / 10

console.log( "A media geral dos alunos foi : " + mediageral)
console.log( "A quantidade de homens cadastrados foi de:" + qthomens)
console.log( "A quantidade de mulheres que tiveram notas acime de 7 foi de: " + quantmulhersacimad7)
console.log( "A maior nota entre os homens foi de: " + maiornotahomem)