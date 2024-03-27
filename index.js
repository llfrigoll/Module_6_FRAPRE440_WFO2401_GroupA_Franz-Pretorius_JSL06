// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuEl = document.querySelector('#menu');
    // Loop through each category and its items in the menu object
    for(let [category, items] of Object.entries(menu)) {
        // Create an element to represent the category
        let categoryEl = document.createElement('h3');
        // Set the text content of the category element to the category name
        categoryEl.textContent = category;
        // Append the category element to the menu container
        menuEl.appendChild(categoryEl);
        // Create an element to represent a list of items
        let list = document.createElement('ul');
        // Append a list of items element to the menu container
        menuEl.appendChild(list);
        // Loop through the items in the category and create list items
        for(let i = 0; i < items.length; i++) {
            // Create a list item element
            let li = document.createElement('li');
            // Set the text content of the list item element to the item name
            li.textContent = items[i];
            // Attach a click event listener to the list item to add it to the order     
            li.addEventListener('click', function(){
                addToOrder(li.textContent)
            });
            // Append the list item to the list of items
            list.appendChild(li);
        }     
    }         
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsListEl = document.querySelector('#order-items');
    const orderTotalEl = document.querySelector('#order-total');
    // Create a list item for the order
    let li = document.createElement('li');
    // Set the text content of the list item to the item name
    li.textContent = itemName;
    // Append the list item to the order items list
    orderItemsListEl.appendChild(li);
    // Calculate and update the total price
    const prevTotal = Number(orderTotalEl.textContent);
    const itemPrice = 60.00;
    const newTotal = prevTotal + itemPrice;
    // Update the text content of the order total element with the new total
    orderTotalEl.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
