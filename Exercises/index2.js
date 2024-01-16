let fome = prompt("Voce esta com fome?")
let dinheiro = prompt("Voce tem grana?")
let restaurante = prompt("O restaurante está aberto?")

if ( fome == "nao" || dinheiro == "nao" ){
    console.log("Voce vai jantar em casa.");
}
else if  ( fome == "sim" && dinheiro == "sim" && restaurante == "nao"){
    console.log("Vai de delivery.");
}
else if (fome == "sim" && dinheiro == "sim" && restaurante == "sim" ){
    console.log("Hoje o jantar vai ser no seu restaurante favorito.");
}
else {
    console.log("Vai pra casa.")
}