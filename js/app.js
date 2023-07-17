const Burger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

Burger.addEventListener("click", () => {
  Nav.classList.toggle("show_mobile_menu");
});
