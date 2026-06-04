import { renderCart, renderStore, renderTotal } from "./ui.js";
import { fetchProducts } from "./api.js";
import { addToCart, getCart, getCartTotal } from "./cart.js";

let productCatalog = [];
const storeGrid = document.getElementById("store-grid");

function updateCartUI(){
    renderCart(getCart());
    renderTotal(getCartTotal());
}

async function init(){
    try {
        productCatalog=await fetchProducts();
        renderStore(productCatalog);
        updateCartUI();
        
    } catch (error) {
        console.error("Error initializing the app:", error);
    }
}

storeGrid.addEventListener("click", (event)=>{
 if(event.target.classList.contains("add-btn")){
    const productId=parseInt(event.target.dataset.id);
    const productToAdd=productCatalog.find(p=>p.id===productId);
    addToCart(productToAdd);
    updateCartUI();
 }
});

init();