document.addEventListener("DOMContentLoaded", function () {
  const menuBurger = document.querySelector(".menu-burger");
  const menuDropdown = document.querySelector(".menu-dropdown");

  menuBurger.addEventListener("click", function () {
    menuDropdown.classList.toggle("active");
  });
});
