const menu__div = document.querySelector(".menu");
const nav__ul = document.querySelector(".nav-ul");

menu__div.addEventListener("click", () => {
  nav__ul.classList.toggle("nav-open");
});
