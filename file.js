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
    calories: "520 cal",
    price: "$6.50",
    img: "cake1.png",
    desc: "Rich chocolate cake layered with smooth fudge and silky ganache"
  },
{
  name: "Raspberry Chocolate Cream",
  calories: "480 cal",
  price: "$6.75",
  img: "cake2.png",
  desc: "Smooth dark chocolate filling topped with light cream and fresh raspberry"
},
{
  name: "Caramel Chocolate Cheesecake",
  calories: "540 cal",
  price: "$7.00",
  img: "cake3.png",
  desc: "Creamy chocolate cheesecake finished with a luscious caramel drizzle"
},
{
  name: "Chocolate Layer Dream",
  calories: "510 cal",
  price: "$6.80",
  img: "cake4.png",
  desc: "Soft chocolate layers filled with velvety chocolate cream and glaze"
},
{
  name: "Chocolate Berry Delight",
  calories: "500 cal",
  price: "$6.95",
  img: "cake6.png",
  desc: "Rich chocolate base topped with fresh berries and smooth chocolate cream"
},
{
  name: "Chocolate Glaze Tart",
  calories: "470 cal",
  price: "$6.60",
  img: "cake7.png",
  desc: "Buttery tart filled with silky chocolate and coated in glossy chocolate glaze"
},
{
  name: "Chocolate Cream Donut",
  calories: "430 cal",
  price: "$5.25",
  img: "cake8.png",
  desc: "Fluffy donut filled with rich chocolate cream and finished with drizzle"
},
{
  name: "Classic Hot Chocolate",
  calories: "320 cal",
  price: "$4.50",
  img: "drink1.png",
  desc: "Warm, velvety melted chocolate blended into a rich and comforting drink"
},
{
  name: "Mocha Latte Supreme",
  calories: "350 cal",
  price: "$5.25",
  img: "drink2.png",
  desc: "Bold espresso mixed with smooth chocolate and creamy steamed milk"
},
{
  name: "Iced Chocolate Shake",
  calories: "420 cal",
  price: "$5.75",
  img: "drink3.png",
  desc: "Thick and creamy chocolate shake made with rich cocoa and ice"
},
{
  name: "Chocolate Cookie Frappe",
  calories: "450 cal",
  price: "$5.95",
  img: "drink4.png",
  desc: "Icy blended drink loaded with chocolate cookies and smooth chocolate cream"
}
]

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

// Call function
renderMenu(menu_items);