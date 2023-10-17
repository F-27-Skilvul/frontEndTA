// Navbar fixed
window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
  
    if ((window, pageYOffset > fixedNav)) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };
  
  // Hamburger
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");
  
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Tambahkan event listener untuk tombol hamburger
    const hamburgerButton = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburgerButton.addEventListener("click", function () {
        navMenu.classList.toggle("hidden");
    });

    // Tambahkan event listener untuk tombol "Lihat" pada password
    const passwordInput = document.getElementById("password");
    const passwordToggle = document.getElementById("toggle");
    const passwordLabel = document.querySelector(".js-password-label");

    passwordToggle.addEventListener("change", function () {
        passwordInput.type = passwordToggle.checked ? "text" : "password";
        passwordLabel.textContent = passwordToggle.checked ? "Sembunyikan" : "Lihat";
    });
});
