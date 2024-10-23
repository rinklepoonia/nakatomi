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