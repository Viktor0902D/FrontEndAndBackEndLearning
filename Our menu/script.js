//items
const menu = [
  {
    id: 1,
    title: "Alpine Pizza",
    price: 14.99,
    category: "Main Course",
    image: "./images/alpine_pizza.jpg",
    description:
      "A rustic pizza topped with melted mozzarella, fresh herbs, and savory mountain-inspired toppings on a crispy thin crust.",
  },
  {
    id: 2,
    title: "Beef Quesadillas",
    price: 11.5,
    category: "Breakfast",
    image: "./images/beef-quesadillas.webp",
    description:
      "Grilled flour tortillas stuffed with seasoned shredded beef, melted cheese, and peppers, served with a side of dipping sauce.",
  },
  {
    id: 3,
    title: "Classic Beef Burger",
    price: 12.0,
    category: "Main Course",
    image: "./images/burger.webp",
    description:
      "A juicy beef patty topped with fresh lettuce, tomato, and melted cheese on a toasted brioche bun, served with a side of fries.",
  },
  {
    id: 4,
    title: "Fluffy Pancakes",
    price: 9.5,
    category: "Breakfast",
    image: "./images/fluffy-pancakes.jpg",
    description:
      "Stack of thick, airy pancakes topped with a pat of butter and served with fresh berries and maple syrup.",
  },
  {
    id: 5,
    title: "Oreo Ice Cream Sundae",
    price: 6.75,
    category: "Dessert",
    image: "./images/oreo-ice-cream.jpg",
    description:
      "Creamy vanilla ice cream mixed with crushed Oreo cookies, topped with chocolate drizzle and a whole cookie.",
  },
  {
    id: 6,
    title: "Strawberry Banana Milkshake",
    price: 5.5,
    category: "Dessert",
    image: "./images/strawberry-banana-milkshake.jpg",
    description:
      "A thick and creamy blend of fresh strawberries and ripe bananas, topped with whipped cream and a strawberry garnish.",
  },
  {
    id: 7,
    title: "Signature Sushi Roll",
    price: 13.25,
    category: "Main Course",
    image: "./images/sushi.jpg",
    description:
      "Freshly prepared sushi rolls featuring premium fish, avocado, and cucumber, served with pickled ginger and wasabi.",
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer=document.querySelector('.btn-container');

//load items
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded!");
  displayMenuItems(menu);
  displayFilterButtons(menu);
});


// Function for Displaying the items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
          <img src="${item.image}" class="photo" alt="${item.title}" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price.toFixed(2)}</h4>
            </header>
            <p class="item-text">
              ${item.description}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

//displaying filter buttons
function displayFilterButtons(meniItems){
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"],
  );

  const categoriesBtns = categories.map((category) => {
    return `<button class="filter-btn" data-id="${category}">${category}</button>`;
  }).join('');
  
  btnContainer.innerHTML=categoriesBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  //filtering on categories

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const choosedCategory = e.currentTarget.dataset.id;
    const menuByCategory = menu.filter((menuItem) => {
      if (menuItem.category === choosedCategory) {
        return menuItem;
      }
    });
    if (choosedCategory === "All" || choosedCategory === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuByCategory);
    }
  });
});
} 
