// =================== navbar =========================//
function openNav() {
  document.querySelector(".mobile-view").classList.toggle("start-0");
  document.querySelector("body").classList.toggle("overflow-hide");
  document.querySelector(".menu").classList.toggle("cross");
}
function closeNav() {
  document.querySelector(".mobile-view").classList.remove("start-0");
  document.querySelector("body").classList.remove("overflow-hide");
  document.querySelector(".menu").classList.remove("cross");
}
function handleNavVisibility() {
  if (window.innerWidth <= 992) {
    document.querySelector("body").classList.remove("overflow_hide");
    document.querySelector(".closeNav").classList.toggle("start-0");
    document.querySelector(".menu").classList.toggle("cross");
  }
}
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 12,
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
      spaceBetween: 12,
      centeredSlides: false,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
      centeredSlides: false,
    }
  }
});

$("#logo-slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  pauseOnHover: false,
  arrows: false,
  variableWidth: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

const centerSwiper = new Swiper('.center-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: false,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: true,
    },
  },
});
