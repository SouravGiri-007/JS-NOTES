// Switch

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default: // Nota: This works similarly to else; if nothing matches, it will print.
        console.log("Default case match");
        break;
} // Output: March


const day = "monday"

switch (day) {
    case "monday":
        console.log("13");
        break;
    case "tuesday":
        console.log("25");
        break;
    case "wednesday":
        console.log("33");
        break;
    case "thrusday":
        console.log("46");
        break;

    default:
        console.log("Default");
        break;
} // Output: 13


/* Note: It will execute all other codes except default if the break keyword is not provided in any scenario. 

Note: That control flow is broken by the Break keyword. */