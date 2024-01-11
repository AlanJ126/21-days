let nome = prompt("Qual seu nome?");
let idade = parseInt(prompt("Qual sua idade?"));
let carta = prompt("Possui carta de motorista?");
let carro = prompt("Possui algum carro?");

if (idade < 18 || carta === "nao"){
    console.log(nome + ", você não pode dirigir.")
}
else if (idade >= 18 && carta === "sim" && carro === "nao"){
    console.log(nome + ", você pode dirigir mas está sem carro.")
}
else if (idade >= 18 && carta === "sim" && carro === "sim"){
    console.log(nome + ", hoje você será o motorista.")

}else { console.log("Vai de Uber.")}