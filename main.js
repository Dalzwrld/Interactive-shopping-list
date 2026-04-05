let items = [];

const name = document.getElementById("itemName");    
const price = document.getElementById("itemPrice");
const addButton = document.querySelector("addButton");
const displayList = document.getElementById("displayList");

function checkInputType(name, price) {
    if (typeof price !== number && typeof name !== string ) {
        console.log("Input not valid");
    } else {
        console.log(`${key}: ${variable[key]}`);
    }
}