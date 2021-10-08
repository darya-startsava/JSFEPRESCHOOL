const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const menuItem = document.querySelectorAll(".menu-item");
const welcomeTitle = document.querySelector(".welcome-title");

hamburger.addEventListener("click", openHamburgerMenu);
menuItem.forEach(n => n.addEventListener("click", closeMenu));

function openHamburgerMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    welcomeTitle.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    welcomeTitle.classList.toggle("active");
}