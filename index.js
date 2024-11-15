/*
document.addEventListener("DOMContentLoaded", function() {
  const cartIcon = document.querySelector(".cart"),
        cartSection = document.querySelector(".cart1"),
        closeButton = document.querySelector(".close");

  // Show/Hide the cart when the cart icon is clicked
  cartIcon.onclick = () => {
    cartSection.classList.toggle("active"); 
  };

  // Hide the cart when the close button is clicked
  closeButton.onclick = () => {
    cartSection.classList.remove("active"); 
  };
});

// Cart array to store items
let cart = [];

// Add items to the cart
function addCart(itemName, price) {
const existingItem = cart.find(item => item.name === itemName);

if (existingItem) {
  existingItem.quantity += 1;
} else {
  const newItem = {
    name: itemName,
    price: price,
    quantity: 1
  };
  cart.push(newItem);
}

// Update the cart display
updateCartDisplay();
}

// Remove items from the cart
function removeCartItem(itemName) {
cart = cart.filter(item => item.name !== itemName); // Remove the item
updateCartDisplay(); // Update the display after removing
}

// Update the cart display
function updateCartDisplay() {
const productlist = document.querySelector(".productlist");
const totalElement = document.querySelector(".total");
const quantitySpan = document.querySelector(".quantity");

productlist.innerHTML = ""; // Clear the product list

let totalPrice = 0;
let totalItems = 0;

cart.forEach(item => {
  totalItems += item.quantity;
  totalPrice += item.price * item.quantity;

  // Create list item
  const listItem = document.createElement("li");
  listItem.style.display = "flex";
  listItem.style.justifyContent = "space-evenly";
  listItem.style.alignItems = "center";
  listItem.style.borderBottom = "1px solid #ddd";
  listItem.style.padding = "10px 0";

  // Create a div for item details (name and price per item)
  const itemDetails = document.createElement("div");
  itemDetails.style.flex = "1";

  // Item name
  const nameDiv = document.createElement("div");
  nameDiv.textContent = `${item.name}`;

  // Item price (below the item name)
  const priceDiv = document.createElement("div");
  priceDiv.textContent = `₹${item.price} each`;

  itemDetails.appendChild(nameDiv);
  itemDetails.appendChild(priceDiv);

  // Create a div for quantity controls
  const itemControls = document.createElement("div");
  itemControls.style.display = "flex";
  itemControls.style.alignItems = "center";

  // Create decrement button
  const decrementButton = document.createElement("button");
  decrementButton.textContent = "-";
  decrementButton.onclick = () => {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      removeCartItem(item.name);
    }
    updateCartDisplay();
  };

  // Create quantity display
  const quantityDisplay = document.createElement("span");
  quantityDisplay.textContent = item.quantity;
  quantityDisplay.style.margin = "0 10px";

  // Create increment button
  const incrementButton = document.createElement("button");
  incrementButton.textContent = "+";
  incrementButton.onclick = () => {
    item.quantity += 1;
    updateCartDisplay();
  };

  // Append controls (without price on the right side)
  itemControls.appendChild(decrementButton);
  itemControls.appendChild(quantityDisplay);
  itemControls.appendChild(incrementButton);

  // Append item details and controls to the list item
  listItem.appendChild(itemDetails);
  listItem.appendChild(itemControls);

  // Append the subtotal below the item details
  const subtotalDiv = document.createElement("div");
  subtotalDiv.style.textAlign = "right";
  subtotalDiv.textContent = `₹${item.price * item.quantity}`.padStart(60);
  listItem.appendChild(subtotalDiv);

  productlist.appendChild(listItem);
});

// Update the total price and item count
totalElement.innerHTML = `<small>TOTAL(${totalItems} item${totalItems > 1 ? "s" : ""})</small> ₹${totalPrice}`;
quantitySpan.textContent = totalItems; // Update quantity in cart icon
}


*/

document.addEventListener("DOMContentLoaded", function() {
  const cartIcon = document.querySelector(".cart"),
        cartSection = document.querySelector(".cart1"),
        orderButton = document.querySelector(".order");

  // Show/Hide the cart when the cart icon is clicked
  cartIcon.onclick = () => {
    cartSection.classList.toggle("active"); 
  };

  // Show the "Order placed" message when the order button is clicked
  orderButton.onclick = () => {
    if (cart.length > 0) {
      alert("Order placed successfully!");
      cart = []; // Clear the cart after placing the order
      updateCartDisplay(); // Update the cart display to reflect the empty cart
    } else {
      alert("Your cart is empty.");
    }
  };
});

// Cart array to store items
let cart = [];

// Add items to the cart
function addCart(itemName, price) {
  const existingItem = cart.find(item => item.name === itemName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const newItem = {
      name: itemName,
      price: price,
      quantity: 1
    };
    cart.push(newItem);
  }

  // Update the cart display
  updateCartDisplay();
}

// Remove items from the cart
function removeCartItem(itemName) {
  cart = cart.filter(item => item.name !== itemName); // Remove the item
  updateCartDisplay(); // Update the display after removing
}

// Update the cart display
function updateCartDisplay() {
  const productlist = document.querySelector(".productlist");
  const totalElement = document.querySelector(".total");
  const quantitySpan = document.querySelector(".quantity");

  productlist.innerHTML = ""; // Clear the product list

  let totalPrice = 0;
  let totalItems = 0;

  cart.forEach(item => {
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;

    // Create list item
    const listItem = document.createElement("li");
    listItem.style.display = "flex";
    listItem.style.justifyContent = "space-evenly";
    listItem.style.alignItems = "center";
    listItem.style.borderBottom = "1px solid #ddd";
    listItem.style.padding = "10px 0";

    // Create a div for item details (name and price per item)
    const itemDetails = document.createElement("div");
    itemDetails.style.flex = "1";

    // Item name
    const nameDiv = document.createElement("div");
    nameDiv.textContent = `${item.name}`;

    // Item price (below the item name)
    const priceDiv = document.createElement("div");
    priceDiv.textContent = `₹${item.price} each`;

    itemDetails.appendChild(nameDiv);
    itemDetails.appendChild(priceDiv);

    // Create a div for quantity controls
    const itemControls = document.createElement("div");
    itemControls.style.display = "flex";
    itemControls.style.alignItems = "center";

    // Create decrement button
    const decrementButton = document.createElement("button");
    decrementButton.textContent = "-";
    decrementButton.onclick = () => {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        removeCartItem(item.name);
      }
      updateCartDisplay();
    };

    // Create quantity display
    const quantityDisplay = document.createElement("span");
    quantityDisplay.textContent = item.quantity;
    quantityDisplay.style.margin = "0 10px";

    // Create increment button
    const incrementButton = document.createElement("button");
    incrementButton.textContent = "+";
    incrementButton.onclick = () => {
      item.quantity += 1;
      updateCartDisplay();
    };

    // Append controls (without price on the right side)
    itemControls.appendChild(decrementButton);
    itemControls.appendChild(quantityDisplay);
    itemControls.appendChild(incrementButton);

    // Append item details and controls to the list item
    listItem.appendChild(itemDetails);
    listItem.appendChild(itemControls);

    // Append the subtotal below the item details
    const subtotalDiv = document.createElement("div");
    subtotalDiv.style.textAlign = "right";
    subtotalDiv.textContent = `₹${item.price * item.quantity}`.padStart(60);
    listItem.appendChild(subtotalDiv);

    productlist.appendChild(listItem);
  });

  // Update the total price and item count
  totalElement.innerHTML = `<small>TOTAL(${totalItems} item${totalItems > 1 ? "s" : ""})</small> ₹${totalPrice}`;
  quantitySpan.textContent = totalItems; // Update quantity in cart icon
}

