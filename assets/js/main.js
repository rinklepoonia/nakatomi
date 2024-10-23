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
// =======================dropdown =========================//
function toggleClass() {
  const btn = document.getElementById('btn');
   const arrow = document.getElementById('dropdown-arrow');
  btn.classList.toggle("active");
    arrow.classList.toggle("rotate");

   event.stopPropagation();

    document.addEventListener('click', function(e) {
        if (!btn.contains(e.target) && btn.classList.contains("active")) {
          btn.classList.remove("active");
            arrow.classList.remove("rotate");
        }
    });
}

$(document).ready(function () {
    $('.Travel_link').on('click', function () {
        $('.Travel_link').removeClass('active');
        $(this).addClass('active');
    })
});


  