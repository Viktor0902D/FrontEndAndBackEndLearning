// api.js
const catalog = [
    { id: 1, name: "Wireless Headphones", price: 120.00, image: "https://placehold.co/100x100?text=Audio" },
    { id: 2, name: "Mechanical Keyboard", price: 150.00, image: "https://placehold.co/100x100?text=Keyb" },
    { id: 3, name: "4K Monitor", price: 300.00, image: "https://placehold.co/100x100?text=Screen" },
    { id: 4, name: "Ergonomic Mouse", price: 80.00, image: "https://placehold.co/100x100?text=Mouse" }
];

export async function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(catalog), 500); // Simulates network delay
    });
}