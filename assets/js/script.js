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
