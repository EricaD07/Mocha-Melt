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





/*---------------------------------- ABOUT PAGE ---------------------------------*/


//----------- Accordions (DOM Attribute)-----//
// Ai-Assisted: Allows FAQ radio buttons to be toggled off by clicking them again, helped to correct my code attributes and error //
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




    
/*---------------------------------- MENU PAGE ---------------------------------*/

//----------- Dynamic Content Rendering ---------//
const menu_items = [
  {
    name: "Triple Chocolate Fudge",
    category: ["cakes"],
    calories: "520 cal",
    price: "$6.50",
    img: "Assets/cake1.webp",
    desc: "Rich chocolate cake layered with smooth fudge and silky ganache"
  },
  {
    name: "Raspberry Choco Cake",
    category: ["cakes", "fruit"],
    calories: "480 cal",
    price: "$6.75",
    img: "Assets/cake2.webp",
    desc: "Smooth dark chocolate filling topped with light cream and fresh raspberry"
  },
  {
    name: "Berry Chocolate Cheesecake",
    category: ["cakes", "fruit"],
    calories: "540 cal",
    price: "$7.00",
    img: "Assets/cake3.webp",
    desc: "Creamy chocolate cheesecake finished with a luscious caramel drizzle"
  },
  {
    name: "Chocolate Layer Dream",
    category: ["cakes"],
    calories: "510 cal",
    price: "$6.80",
    img: "Assets/cake4.webp",
    desc: "Soft chocolate layers filled with velvety chocolate cream and glaze"
  },
  {
    name: "Chocolate Berry Delight",
    category: ["cakes", "fruit"],
    calories: "500 cal",
    price: "$6.95",
    img: "Assets/cake6.webp",
    desc: "Rich chocolate base topped with fresh berries and smooth chocolate cream"
  },
  {
    name: "Caramel Glaze Tart",
    category: ["pastries"],
    calories: "470 cal",
    price: "$6.60",
    img: "Assets/cake7.webp",
    desc: "Buttery tart filled with silky chocolate and coated in glossy caramel glaze"
  },
  {
    name: "Blackberry Cocoa Cream Donut",
    category: ["pastries", "fruit"],
    calories: "430 cal",
    price: "$5.25",
    img: "Assets/cake8.webp",
    desc: "Fluffy donut filled with rich chocolate cream and finished with drizzle"
  },
  {
    name: "Cinnamon Hot Chocolate",
    category: ["drinks", "hot"],
    calories: "320 cal",
    price: "$4.50",
    img: "Assets/drink1.webp",
    desc: "Warm, velvety melted chocolate blended into a rich and comforting drink"
  },
  {
    name: "Mocha Latte Supreme",
    category: ["drinks", "hot"],
    calories: "350 cal",
    price: "$5.25",
    img: "Assets/drink2.webp",
    desc: "Bold espresso mixed with smooth chocolate and creamy steamed milk"
  },
  {
    name: "Iced Chocolate Shake",
    category: ["drinks", "cold"],
    calories: "420 cal",
    price: "$5.75",
    img: "Assets/drink3.webp",
    desc: "Thick and creamy chocolate shake made with rich cocoa and ice"
  },
  {
    name: "Chocolate Cookie Frappe",
    category: ["drinks", "cold"],
    calories: "450 cal",
    price: "$5.95",
    img: "Assets/drink4.webp",
    desc: "Icy blended drink loaded with chocolate cookies and smooth chocolate cream"
  },
  {
    name: "Häagen-Dazs Ice Cream",
    category: ["cold"],
    calories: "250 cal",
    price: "$3.95 each",
    img: "Assets/icecream.webp",
    desc: "Creamy ice cream bars coated in a rich chocolate shell, available in a variety of indulgent flavours."
  }
];

//----------- RENDER MENU ---------//
function renderMenu(items) {

  if (!gallery) return;

  gallery.innerHTML = "";

  if (items.length === 0) {
    gallery.innerHTML = "<p class=apology> Sorry, we currently don't have what you're looking for.</p>";
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card", "menu-card");

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="content">
        <div class="menu-header">
          <h4>${item.name}</h4>
          <span class="price">${item.price}</span>
        </div>

        <p class="calories">${item.calories}</p>
        <p class="desc">${item.desc}</p>
      </div>
    `;

    gallery.appendChild(card);
  });
}


//----------- Filtering ---------//
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");
const gallery = document.querySelector(".menu-gallery"); /*AI-Assisted: Helped solved bug of of items not rendering after implementing search feature. Solved by moving this variable here*/

if (searchInput && filterButtons.length > 0 && gallery) {

  let activeCategory = "all";   // AI-assisted: Helped make my original fitering code more concise 

  // filter buttons
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      activeCategory = button.getAttribute("data-keyword");

      applyFilters();
    });
  });


//----------- Search Button ---------//
  searchInput.addEventListener("input", applyFilters);

  function applyFilters() {
    const searchValue = searchInput.value.toLowerCase(); // AI assisted: Helped implement search

    const filteredItems = menu_items.filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchValue) ||
        item.desc.toLowerCase().includes(searchValue);

      const matchesCategory =
        activeCategory === "all" ||
        item.category.includes(activeCategory);

      return matchesSearch && matchesCategory;
    });

    renderMenu(filteredItems);
  }}


//--render
renderMenu(menu_items);







/*---------------------------------- CONTACT PAGE ---------------------------------*/
//form validation//
const form = document.querySelector("#contactForm");

if (form) {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone");
    const dateInput = document.querySelector("#reservation-date");
    const timeInput = document.querySelector("#time");
    const TYMessage = document.querySelector("#thankYouMessage");
    const phonePattern = /^[\d\s\-]{10,15}$/;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Clear previous messages
        const errorSpans = form.querySelectorAll(".error-message");
        errorSpans.forEach(span => span.textContent = "");
        TYMessage.textContent = "";
        
        let valid = true;

        if (nameInput.value.trim() === "") { //AI-Assisted: How to use nextElementSibling to display error messages without needing to create new elements for each input//
            nameInput.nextElementSibling.textContent = "Please enter your full name";
            valid = false;
        }
        //AI-Assisted: Apply previous condition to other inputs for time efficiency//
        if (!emailInput.value.includes("@")) {
            emailInput.nextElementSibling.textContent = "Please enter a valid email";
            valid = false;
        }
        if (!phonePattern.test(phoneInput.value)) {
            phoneInput.nextElementSibling.textContent = "Please enter a valid phone number";
            valid = false;
        }
        if (dateInput.value === "") {
            dateInput.nextElementSibling.textContent = "Please select a date";
            valid = false;
        }
        if (timeInput.value === "") {
            timeInput.nextElementSibling.textContent = "Please select a time";
            valid = false;
        }
        // Thank you msg
        if (valid) {
            TYMessage.textContent = "Thank you for reserving at MochaMelt! You will receive an email upon confirmation.";
            form.reset();
            
            setTimeout(() => {
                TYMessage.textContent = "";
            }, 10000);
        }
    });

    // Error message disappears if fixed 
    nameInput.addEventListener("input", () => {
        if (nameInput.value.trim() !== "") nameInput.nextElementSibling.textContent = "";
    });

    emailInput.addEventListener("input", () => {
        if (emailInput.value.includes("@")) emailInput.nextElementSibling.textContent = "";
    });

    phoneInput.addEventListener("input", () => {
        if (phonePattern.test(phoneInput.value)) phoneInput.nextElementSibling.textContent = "";
    });

    dateInput.addEventListener("change", () => {
        if (dateInput.value !== "") dateInput.nextElementSibling.textContent = "";
    });

    timeInput.addEventListener("change", () => {
        if (timeInput.value !== "") timeInput.nextElementSibling.textContent = "";
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