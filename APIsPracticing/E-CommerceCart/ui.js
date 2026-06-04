const storeGrid = document.getElementById("store-grid");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalContainer = document.getElementById("cart-total");

export function renderStore(catalogArray) {
  storeGrid.innerHTML = "";
  catalogArray.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price.toFixed(2)}</p>
    <button class="add-btn" data-id="${product.id}">Add to Cart</button>
    `;
    storeGrid.appendChild(productCard);
  });
}

export function renderCart(cartArray) {
  cartItemsContainer.innerHTML = "";
  cartArray.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <span>${item.name} (x${item.quantity})</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>`;
    cartItemsContainer.appendChild(cartItem);
  });
}

export function renderTotal(total){
     cartTotalContainer.textContent = `$${total.toFixed(2)}`;
}
