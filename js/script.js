const hero = document.querySelector(".hero");
const video = document.getElementById("heroVideo");
const cursor = document.getElementById("videoCursor");

hero.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

hero.addEventListener("mouseenter", ()=>{

    cursor.style.opacity = "1";

});

hero.addEventListener("mouseleave", ()=>{

    cursor.style.opacity = "0";

});

hero.addEventListener("click", ()=>{

    if(video.paused){

        video.play();
        cursor.innerHTML = "PAUSE";

    }else{

        video.pause();
        cursor.innerHTML = "PLAY";

    }

});
const products = document.querySelector(".products");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

rightBtn.addEventListener("click", () => {

    products.scrollBy({

        left: 300,

        behavior: "smooth"

    });

});

leftBtn.addEventListener("click", () => {

    products.scrollBy({

        left: -300,

        behavior: "smooth"

    });

});
const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        const icon = button.querySelector("i");

        button.classList.toggle("active");

        if(button.classList.contains("active")){

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

        }else{

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

        }

    });

});