// Hamburger Menu //
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=> { 
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
// Closes menu when a link is clciked
const navLinks = document.querySelectorAll(".nav-item a").forEach(n=> n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    }))



//Dynamic Content Rendering from Data //
const menu_items = [
  {
    name: "Triple Chocolate Fudge",
    category: ["cakes"],
    calories: "520 cal",
    price: "$6.50",
    img: "Assets/cake1.png",
    desc: "Rich chocolate cake layered with smooth fudge and silky ganache"
  },
  {
    name: "Raspberry Chocolate Cream",
    category: ["cakes", "fruit"],
    calories: "480 cal",
    price: "$6.75",
    img: "Assets/cake2.png",
    desc: "Smooth dark chocolate filling topped with light cream and fresh raspberry"
  },
  {
    name: "Caramel Chocolate Cheesecake",
    category: ["cakes"],
    calories: "540 cal",
    price: "$7.00",
    img: "Assets/cake3.png",
    desc: "Creamy chocolate cheesecake finished with a luscious caramel drizzle"
  },
  {
    name: "Chocolate Layer Dream",
    category: ["cakes"],
    calories: "510 cal",
    price: "$6.80",
    img: "Assets/cake4.png",
    desc: "Soft chocolate layers filled with velvety chocolate cream and glaze"
  },
  {
    name: "Chocolate Berry Delight",
    category: ["cakes", "fruit"],
    calories: "500 cal",
    price: "$6.95",
    img: "Assets/cake6.png",
    desc: "Rich chocolate base topped with fresh berries and smooth chocolate cream"
  },
  {
    name: "Chocolate Glaze Tart",
    category: ["pastries"],
    calories: "470 cal",
    price: "$6.60",
    img: "Assets/cake7.png",
    desc: "Buttery tart filled with silky chocolate and coated in glossy chocolate glaze"
  },
  {
    name: "Chocolate Cream Donut",
    category: ["pastries"],
    calories: "430 cal",
    price: "$5.25",
    img: "Assets/cake8.png",
    desc: "Fluffy donut filled with rich chocolate cream and finished with drizzle"
  },
  {
    name: "Classic Hot Chocolate",
    category: ["drinks", "hot"],
    calories: "320 cal",
    price: "$4.50",
    img: "Assets/drink1.png",
    desc: "Warm, velvety melted chocolate blended into a rich and comforting drink"
  },
  {
    name: "Mocha Latte Supreme",
    category: ["drinks", "hot"],
    calories: "350 cal",
    price: "$5.25",
    img: "Assets/drink2.png",
    desc: "Bold espresso mixed with smooth chocolate and creamy steamed milk"
  },
  {
    name: "Iced Chocolate Shake",
    category: ["drinks", "cold"],
    calories: "420 cal",
    price: "$5.75",
    img: "Assets/drink3.png",
    desc: "Thick and creamy chocolate shake made with rich cocoa and ice"
  },
  {
    name: "Chocolate Cookie Frappe",
    category: ["drinks", "cold"],
    calories: "450 cal",
    price: "$5.95",
    img: "Assets/drink4.png",
    desc: "Icy blended drink loaded with chocolate cookies and smooth chocolate cream"
  }
];

// Render Menu Items
function renderMenu(items) {
  const gallery = document.querySelector(".menu-gallery");

  if (gallery) {
    gallery.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
      const card = document.createElement("div");
      card.classList.add("card", "menu-card");

      card.innerHTML = `
        <img src="${items[i].img}" alt="${items[i].name}">
        
        <div class="menu-header">
          <h3>${items[i].name}</h3>
          <span class="price">${items[i].price}</span>
        </div>

        <p class="calories">${items[i].calories}</p>
        <p class="desc">${items[i].desc}</p>
      `;

      gallery.appendChild(card);
    }}
}
renderMenu(menu_items);


// Filter Buttons
const filterButtons = document.querySelectorAll(".filter-btn");

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {

    // Remove active from all
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }

    // Add active to clicked
    filterButtons[i].classList.add("active");

    const category = filterButtons[i].getAttribute("keyword");

    let filteredItems;

    if (category === "all") {
      filteredItems = menu_items;
    } else {
      filteredItems = menu_items.filter(item =>
        item.category.includes(category)
      );
    }

    renderMenu(filteredItems);
  });
}



//Back to Top Button //
const backToTop = document.querySelector("#back-to-top");

if (backToTop) {

    // Show  button when user scrolls down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}