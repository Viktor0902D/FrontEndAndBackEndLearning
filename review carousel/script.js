//Responsive navigation bar
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
console.log(linksContainer.classList);
navToggle.addEventListener("click", () => {
  linksContainer.classList.toggle("show-links");
});

//Rewiews data and functions for review carousel
const reviews = [
  {
    id: 0,
    name: "sara johnson",
    job: "backend developer",
    img: "images/person-0.webp",
    text: "Backend developer with 5 years of experience in building scalable web applications. Proficient in Node.js, Express, and MongoDB. Passionate about creating efficient and secure APIs.S",
  },
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "images/person-1.avif",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "alex johnson",
    job: "web designer",
    img: "images/person-2.jfif",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "images/person-3.avif",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];

const img = document.getElementById("img-review");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
