let choice = parseInt(prompt("Choose an option:" + "\n1 - Refuel with gasoline; \n2 - Refuel with ethanol; \n3 - Inflate the tires"));
let value;
let quantity;

switch (choice) {
    case 1:
        value = parseInt(prompt("How much do you want to refuel?"));
        quantity = value / 5;
        console.log("You have refueled " + quantity + "L of gasoline.");
        break;
    case 2:
        value = parseInt(prompt("How much do you want to refuel?"));
        quantity = value / 3;
        console.log("You have refueled " + quantity.toFixed(2) + "L of ethanol.");
        break;
    default:
        console.log("Tires successfully inflated.");
        break;
}
