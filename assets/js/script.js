function toggleMode() {
  const body = document.getElementById("body");
  if (body.classList.contains("bg-slate-950")) {
    body.classList.remove("bg-slate-950", "text-white");
    body.classList.add("bg-white", "text-slate-800");
  } else {
    body.classList.remove("bg-white", "text-slate-800");
    body.classList.add("bg-slate-950", "text-white");
  }
}

const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

const swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

document.querySelectorAll(".faq-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector(".faq-icon");

    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-icon");
  });
});

// Navbar scrolled
const navbar = document.getElementById("navbar");
// const navMenu = document.getElementById("nav-menu")
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
    // navbar.classList.add("nav-menu-scrolled")
  } else {
    navbar.classList.remove("navbar-scrolled");
    // navbar.classList.remove("nav-menu-scrolled")
  }
});
