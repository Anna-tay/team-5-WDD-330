import { setLocalStorage, getLocalStorage, getParam } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

const productId = getParam("product");
console.log(findProductById(productId));

function addProductToCart(product) {
  // Retrieve the existing array from local storage or create an empty array
  const cartItems = getLocalStorage("so-cart") || [];

  // Add the new product to the array
  cartItems.push(product);

  // Save the updated array back to local storage
  setLocalStorage("so-cart", cartItems);
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