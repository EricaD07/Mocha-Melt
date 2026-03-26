//----------- Responsive Hamburger Menu ---------//
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



//----------- Dynamic Content Rendering ---------//
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
    name: "Raspberry Choco Cake",
    category: ["cakes", "fruit"],
    calories: "480 cal",
    price: "$6.75",
    img: "Assets/cake2.png",
    desc: "Smooth dark chocolate filling topped with light cream and fresh raspberry"
  },
  {
    name: "Caramel Chocolate Cheesecake",
    category: ["cakes", "fruit"],
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
    name: "Blackberry Cocoa Cream Donut",
    category: ["pastries", "fruit"],
    calories: "430 cal",
    price: "$5.25",
    img: "Assets/cake8.png",
    desc: "Fluffy donut filled with rich chocolate cream and finished with drizzle"
  },
  {
    name: "Cinnamon Hot Chocolate",
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
  },
  {
    name: "Häagen-Dazs Ice Cream",
    category: ["cold"],
    calories: "250 cal",
    price: "$3.95 each",
    img: "Assets/icecream.png",
    desc: "Creamy ice cream bars coated in a rich chocolate shell, available in a variety of indulgent flavours."
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
        <div class="content">
          <div class="menu-header">
            <h4>${items[i].name}</h4>
            <span class="price">${items[i].price}</span>
          </div>

          <p class="calories">${items[i].calories}</p>
          <p class="desc">${items[i].desc}</p>
          <button class="button">Nutrition</button>
        </div>
      `;

      gallery.appendChild(card);
    }}
}
renderMenu(menu_items);


//----------- Filter Buttons ---------//
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



//----------- Back to Top Button-----//
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





//----------- Accordion or Tabbed Content (DOM Attribute)-----//

// Ai-Assisted: Allows QnA radio buttons to be toggled off by clicking them again, helped to correct my code attributes and error //
document.addEventListener('DOMContentLoaded', () => {
    //(FAQ and Treats)
    const allRadios = document.querySelectorAll('input[name="Frequent-QNA"], input[name="Treats-accordion"]');
    const mainImg = document.getElementById('main-accordion-img');

    allRadios.forEach(radio => {
        // 'click' but with a special toggle logic
        radio.addEventListener('click', function(e) {
            //  specific radiochecked before 
            if (this.getAttribute('data-state') === 'active') {
                this.checked = false;
                this.setAttribute('data-state', 'inactive');
            } else {
                // Reset all others in the same group so only one is 'active'
                const groupName = this.getAttribute('name');
                document.querySelectorAll(`input[name="${groupName}"]`).forEach(r => {
                    r.setAttribute('data-state', 'inactive');
                });
                this.setAttribute('data-state', 'active');
            }
        });
    });
});





//------- ACCORDION IMAGE SWAP SET UP ------//
//----------- Unified Accordion & Image Swap ---------//
document.addEventListener('DOMContentLoaded', () => {
    const mainImg = document.getElementById('main-accordion-img');
    const radioButtons = document.querySelectorAll('input[name="Treats-accordion"]');

    //Ai helped to correct my code attributes and error of this first if//
    if (mainImg) {
        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    const newSrc = radio.getAttribute('data-image');
                    
                    // 1. Fade out the current image
                    mainImg.style.opacity = '0';
                    
                    // 2. Wait for the fade (300ms) then swap the source
                    setTimeout(() => {
                        mainImg.src = newSrc;
                        
                        // 3. Fade back in only after the new image has loaded
                        mainImg.onload = () => {
                            mainImg.style.opacity = '1';
                        };
                        
                        // Fallback if the image is already in the browser cache
                        if (mainImg.complete) {
                            mainImg.style.opacity = '1';
                        }
                    }, 300);
                }
            });
        });
    }
});






//------- CONTACT THANK YOU MESSAGE ------//
const form = document.getElementById("contactForm");
const message = document.getElementById("thankYouMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  message.textContent = "Thank you for your message! We will get back to you soon.";
  message.style.display = "block";

  form.reset();

  // hide message after 5 seconds
  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
});