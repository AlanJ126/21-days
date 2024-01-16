while (quantaluno <= 10 ){
    nota = parseInt(prompt("qual a nota " + quantaluno + " aluno?"))
    sexo = prompt("Qual seu sexo ( m/f) ? ")

    if(sexo == "m"){
        if (nota > maiornotahomem){
            maiornotahomem = nota
        }
    }
}