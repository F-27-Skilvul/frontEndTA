// Simpan elemen navbar dalam variabel
const navbar = document.querySelector('.bg-white');

// Simpan tinggi navbar
const navbarHeight = navbar.offsetHeight;

// Fungsi untuk menentukan apakah navbar harus ditampilkan atau disembunyikan saat menggulir
function toggleNavbarOnScroll() {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'z-50', 'shadow-md', 'blur-navbar');
  } else {
    navbar.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'z-50', 'shadow-md', 'blur-navbar');
  }
}

// Tambahkan event listener ke window untuk memanggil fungsi saat menggulir
window.addEventListener('scroll', toggleNavbarOnScroll);

// Panggil fungsi saat halaman pertama kali dimuat
toggleNavbarOnScroll();



//Navbar navigation
document.addEventListener("DOMContentLoaded", function () {
  // Button user menu dan dropdown
  const userMenuButton = document.getElementById("user-menu-button");
  const userDropdown = document.getElementById("user-dropdown");

  userMenuButton.addEventListener("click", function () {
    userDropdown.classList.toggle("hidden");
  });

  // Mobile 
  const mobileMenuButton = document.querySelector("[data-collapse-toggle='navbar-user']");
  const navbarUser = document.getElementById("navbar-user");

  mobileMenuButton.addEventListener("click", function () {
    navbarUser.classList.toggle("hidden");
  });
});

// You can also add additional functionality here as needed.
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
  
  // // Hamburger
  // const hamburger = document.querySelector("#hamburger");
  // const navMenu = document.querySelector("#nav-menu");
  
  // hamburger.addEventListener("click", function () {
  //   hamburger.classList.toggle("hamburger-active");
  //   navMenu.classList.toggle("hidden");
  // });

  // document.addEventListener("DOMContentLoaded", function () {
  //   // Tambahkan event listener untuk tombol hamburger
  //   const hamburgerButton = document.getElementById("hamburger");
  //   const navMenu = document.getElementById("nav-menu");

  //   hamburgerButton.addEventListener("click", function () {
  //       navMenu.classList.toggle("hidden");
  //   });

    // Tambahkan event listener untuk tombol "Lihat" pada password
    const passwordInput = document.getElementById("password");
    const passwordToggle = document.getElementById("toggle");
    const passwordLabel = document.querySelector(".js-password-label");

    passwordToggle.addEventListener("change", function () {
        passwordInput.type = passwordToggle.checked ? "text" : "password";
        passwordLabel.textContent = passwordToggle.checked ? "Sembunyikan" : "Lihat";
    });
});
