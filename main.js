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

    // Create an object to store each product with its price
    const shoppingItemsObject = {
        itemName: name,
        itemPrice: Number(price),
    };

    // Add your object into your array
    shoppingItems.push(shoppingItemsObject);

    // Clear out your input fields
    itemName.value = "";
    itemPrice.value = "";

}

// Create a new function to display your items in your display list
function displayItems() {
    // Clear out your old display
    displayList.innerHTML = "";

    // Check for an empty list and prompt user to add items
    if (shoppingItems.length === 0) {
        displayList.innerHTML = "Please add an item";
        return;
    }
}

// Check for validity of your inputs
function checkInputType(name, price) {
    if (typeof price !== number && typeof name !== string ) {
        console.log("Input not valid");
    } else {
        console.log(`${key}: ${variable[key]}`);
    }
}


addButton.addEventListener("click", addItem);