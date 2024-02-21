import { setLocalStorage, getParam } from "./utils.mjs";
import { findProductById } from "./externalServices.mjs";

const productId = getParam("product");
console.log(findProductById(productId));

function addProductToCart(product) {
  // Get existing cart items from local storage
  const existingCartItems = JSON.parse(localStorage.getItem("so-cart")) || [];

  // Add the new product to the existing items
  existingCartItems.push(product);

  // Save the updated cart items back to local storage
  setLocalStorage("so-cart", existingCartItems);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);