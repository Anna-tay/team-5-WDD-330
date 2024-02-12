import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

  if (cartItems && cartItems.length > 0) {
    // Cart is not empty
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");

    // Calculate and display the total
    const total = calculateTotal(cartItems);
    document.querySelector("#totalPrice").innerText = `Total: $${total.toFixed(2)}`;
    
    // Show the total price element
    document.querySelector("#totalPrice").style.display = "block";
  } else {
    // Cart is empty
    // Clear the product list
    document.querySelector(".product-list").innerHTML = "";
    
    // Hide the total price element
    document.querySelector("#totalPrice").style.display = "none";
  }
}

function calculateTotal(cartItems) {
  let total = 0;
  for (const item of cartItems) {
    total += item.FinalPrice;
  }
  return total;
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${item.Image}" alt="${item.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;

  return newItem;
}

renderCartContents();
