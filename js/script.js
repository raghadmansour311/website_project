/* ========================= */
/* Hero Video Cursor */
/* ========================= */

const hero = document.querySelector(".hero");
const video = document.getElementById("heroVideo");
const cursor = document.getElementById("videoCursor");

if (hero && video && cursor) {

    hero.addEventListener("mousemove", (e) => {
        const rect = hero.getBoundingClientRect();

        cursor.style.left = `${e.clientX - rect.left}px`;
        cursor.style.top = `${e.clientY - rect.top}px`;
    });

    hero.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1";
    });

    hero.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
    });

    hero.addEventListener("click", () => {

        if (video.paused) {

            video.play();
            cursor.textContent = "PAUSE";

        } else {

            video.pause();
            cursor.textContent = "PLAY";

        }

    });

}


/* ========================= */
/* Best Sellers Slider */
/* ========================= */

const productsContainer = document.querySelector(".best-sellers .products");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

if (productsContainer && leftBtn && rightBtn) {

    rightBtn.addEventListener("click", () => {

        productsContainer.scrollBy({
            left: 300,
            behavior: "smooth"
        });

    });

    leftBtn.addEventListener("click", () => {

        productsContainer.scrollBy({
            left: -300,
            behavior: "smooth"
        });

    });

}


/* ========================= */
/* Notes Slider */
/* ========================= */

const notesContainer = document.querySelector(".notes-container");
const notesLeft = document.querySelector(".notes-left");
const notesRight = document.querySelector(".notes-right");

if (notesContainer && notesLeft && notesRight) {

    const card = notesContainer.querySelector(".note-card");
    const scrollAmount = card.offsetWidth + 35;

    notesRight.addEventListener("click", () => {

        notesContainer.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });

    });

    notesLeft.addEventListener("click", () => {

        notesContainer.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });

    });

}


/* ========================= */
/* Wishlist */
/* ========================= */

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(btn => {

    const card = btn.closest(".product-card");

    const product = {

        id: Date.now(),

        name: card.querySelector("h3").innerText,
        brand: card.querySelector(".brand").innerText,
        price: card.querySelector(".price").innerText,
        image: card.querySelector("img").getAttribute("src")

    };

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.some(item => item.name === product.name)) {

        btn.classList.add("active");

        btn.querySelector("i").classList.remove("fa-regular");
        btn.querySelector("i").classList.add("fa-solid");

    }

    btn.addEventListener("click", () => {

        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        const index = wishlist.findIndex(item => item.name === product.name);

        if (index === -1) {

            wishlist.unshift(product);
            btn.classList.add("active");

            btn.querySelector("i").classList.remove("fa-regular");
            btn.querySelector("i").classList.add("fa-solid");

        } else {

            wishlist.splice(index, 1);

            btn.classList.remove("active");

            btn.querySelector("i").classList.remove("fa-solid");
            btn.querySelector("i").classList.add("fa-regular");

        }

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

    });

});