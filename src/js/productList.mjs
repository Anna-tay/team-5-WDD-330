import { getProductsByCategory } from "./externalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=">
    <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.SuggestedRetailPrice}</p></a>
    <h1 class="colors">this is the new testing card</h1>
  </li>`
}             


export default function productList(selector, category) {
    const element = document.querySelector(selector);
    const products = getProductsByCategory(category);
    console.log(products);
    renderListWithTemplate(productCardTemplate, element, products);
}

