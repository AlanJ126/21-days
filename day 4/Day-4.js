let fome = prompt("Você está com fome?");
let dinheiro = prompt("Você tem dinheiro?");
let restaurante = prompt("O restaurante está aberto?");

if (fome === "nao" && dinheiro === "nao") {
    console.log("Hoje a janta será em casa.");
} else if (fome === "sim" && dinheiro === "sim" && restaurante === "nao") {
    console.log("Vai de delivery.");
} else if (fome === "sim" && dinheiro === "sim" && restaurante === "sim") {
    console.log("Hoje a janta será no seu restaurante preferido.");
} else {
    console.log("Vai de delivery.");
}
