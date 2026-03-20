const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }),
);

const btn = document.getElementById("btn");
const color = document.querySelector("#color");
btn.addEventListener("click", () => {
  changeColor();
});

function changeColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  color.textContent = `rgb(${red}, ${green}, ${blue})`;

}
