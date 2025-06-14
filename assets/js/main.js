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
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !isExpanded);

  if (isExpanded) {
    // Close menu with slide up
    mobileMenu.classList.remove("translate-y-0", "opacity-100");
    mobileMenu.classList.add("translate-y-[-20px]", "opacity-0");

    // Delay hiding until animation ends
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  } else {
    // Show menu immediately
    mobileMenu.classList.remove("hidden");
    // Use a short delay to allow transition to work
    setTimeout(() => {
      mobileMenu.classList.remove("translate-y-[-20px]", "opacity-0");
      mobileMenu.classList.add("translate-y-0", "opacity-100");
    }, 10);
  }
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

document.querySelectorAll('.faq-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const contentId = button.getAttribute('aria-controls');
    const content = document.getElementById(contentId);

    // Close all
    document.querySelectorAll('.faq-toggle').forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false');
      document.getElementById(btn.getAttribute('aria-controls')).classList.add('hidden');
    });

    // Toggle current
    button.setAttribute('aria-expanded', !expanded);
    content.classList.toggle('hidden', expanded);
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
