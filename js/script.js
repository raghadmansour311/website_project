/* ========================= */
/* Hero Video Cursor */
/* ========================= */
const hero = document.querySelector(".hero");
const video = document.getElementById("heroVideo");
const cursor = document.getElementById("videoCursor");

if (hero && video && cursor) {
    // جعل المؤشر يتبع الماوس بدقة متناهية مع السكرول
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
/* Wishlist Toggle */
/* ========================= */
const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button => {
    button.addEventListener("click", () => {
        const icon = button.querySelector("i");
        button.classList.toggle("active");

        if (button.classList.contains("active")) {
            icon.classList.replace("fa-regular", "fa-solid");
        } else {
            icon.classList.replace("fa-solid", "fa-regular");
        }
    });
});

/* ========================= */
/* Notes Slider */
/* ========================= */

const notesContainer = document.querySelector(".notes-container");
const notesLeft = document.querySelector(".notes-left");
const notesRight = document.querySelector(".notes-right");

if (notesContainer && notesLeft && notesRight) {

    const card = notesContainer.querySelector(".note-card");
    const scrollAmount = card.offsetWidth + 35; // 35 هي قيمة الـ gap

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