document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // Navbar
    // ===========================

    const navbarContainer = document.getElementById("navbar");

    if (navbarContainer) {

        navbarContainer.innerHTML = `
        <nav class="navbar">

            <div class="logo">
                <a href="index.html">
                    <img src="images/notes/logo.png" alt="Arome Logo">
                </a>
            </div>

            <ul class="nav-links">

                <li>
                    <a href="index.html">Home</a>
                </li>

                <li class="dropdown">

                    <a href="#">
                        Perfumes
                        <i class="fa-solid fa-chevron-down"></i>
                    </a>

                    <ul class="dropdown-menu">

                        <li>
                            <a href="all-perfumes.html">All Perfumes</a>
                        </li>

                        <li>
                            <a href="women.html">Women</a>
                        </li>

                        <li>
                            <a href="men.html">Men</a>
                        </li>

                        <li>
                            <a href="unisex.html">Unisex</a>
                        </li>

                    </ul>

                </li>

                <li>
                    <a href="limited.html">Limited Edition</a>
                </li>

                <li>
                    <a href="brands.html">Shop by Brand</a>
                </li>

            </ul>

            <div class="nav-icons">

                <a href="#">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </a>

                <a href="wishlist.html">
                    <i class="fa-regular fa-heart"></i>
                </a>

                <a href="#">
                    <i class="fa-solid fa-bag-shopping"></i>
                </a>

                <a href="register.html" class="register-btn">
                    Register
                </a>

            </div>

        </nav>
        `;
    }

    // ===========================
    // Footer
    // ===========================

    const footerContainer = document.getElementById("footer");

    if (footerContainer) {

        footerContainer.innerHTML = `
        <footer class="footer">

            <div class="footer-container">

                <div class="footer-follow">

                    <h3>Follow Us</h3>

                    <a href="https://www.instagram.com/" target="_blank">
                        Instagram
                    </a>

                    <a href="https://www.tiktok.com/" target="_blank">
                        TikTok
                    </a>

                </div>

                <div class="footer-logo">

                    <img src="images/notes/logo.png" alt="AROME Logo">

                    <p class="footer-subtitle">
                        Luxury Fragrance Experience
                    </p>

                    <a href="about.html" class="meet-team-link">
                        About Us
                    </a>

                </div>

                <div class="footer-contact">

                    <h3>Contact Us</h3>

                    <p>Nablus, Palestine</p>

                    <a href="mailto:info@arome.com">
                        info@arome.com
                    </a>

                    <p>+970 59 XXX XXXX</p>

                </div>

            </div>

            <hr>

            <p class="copyright">
                © 2026 AROME | Designed by Raghd Mansour & Farah Amer
            </p>

        </footer>
        `;
    }

    // ===========================
    // Active Link
    // ===========================

    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    const allLinks = document.querySelectorAll(".nav-links a, .dropdown-menu a");

    allLinks.forEach(link => {

        if (link.getAttribute("href") === currentPath) {

            link.style.color = "#D8C3A5";

            const dropdownParent = link.closest(".dropdown");

            if (dropdownParent) {

                dropdownParent.querySelector("a").style.color = "#D8C3A5";

            }

        }

    });

});