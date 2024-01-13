let num1 = parseInt(prompt("First number:"));
let num2 = parseInt(prompt("Second number:"));
let operation = parseInt(prompt("Which mathematical operation do you want to perform?" + "\n1 = +; \n2 = -; \n3 = *; \n4 = /"));

switch (operation) {
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2));
        break;
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2));
        break;
    default:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2));
        break;
}