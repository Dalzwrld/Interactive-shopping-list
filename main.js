// Define the array
let shoppingItems = [];

// Fetch your elements from your HTML code
const name = document.getElementById("itemName");    
const price = document.getElementById("itemPrice");
const addButton = document.querySelector("addButton");
const displayList = document.getElementById("displayList");

// Create a function to add your items
function addItem(name, price) {
    const name = itemName.value;
    const price = itemPrice.value;
}

// Create object
const itemObject = {
    itemName: name,
    itemPrice: price,
};

// Check for validity of your inputs
function checkInputType(name, price) {
    if (typeof price !== number && typeof name !== string ) {
        console.log("Input not valid");
    } else {
        console.log(`${key}: ${variable[key]}`);
    }
}

addButton.addEventListener("click", addItem);