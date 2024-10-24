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

document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', function () {
    document.querySelectorAll('.accordion-button').forEach(otherButton => {
      otherButton.querySelector('.icon').innerHTML = `
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.92105 18.9211C8.92105 19.3398 9.08741 19.7414 9.38352 20.0375C9.67963 20.3336 10.0812 20.5 10.5 20.5C10.9188 20.5 11.3204 20.3336 11.6165 20.0375C11.9126 19.7414 12.0789 19.3398 12.0789 18.9211V12.0789H18.9211C19.3398 12.0789 19.7414 11.9126 20.0375 11.6165C20.3336 11.3204 20.5 10.9188 20.5 10.5C20.5 10.0812 20.3336 9.67963 20.0375 9.38352C19.7414 9.08741 19.3398 8.92105 18.9211 8.92105H12.0789V2.07895C12.0789 1.66018 11.9126 1.25857 11.6165 0.962463C11.3204 0.666353 10.9188 0.5 10.5 0.5C10.0812 0.5 9.67963 0.666353 9.38352 0.962463C9.08741 1.25857 8.92105 1.66018 8.92105 2.07895V8.92105H2.07895C1.66018 8.92105 1.25857 9.08741 0.962463 9.38352C0.666353 9.67963 0.5 10.0812 0.5 10.5C0.5 10.9188 0.666353 11.3204 0.962463 11.6165C1.25857 11.9126 1.66018 12.0789 2.07895 12.0789H8.92105V18.9211Z" fill="white"/>
      </svg>`;
    });
    const icon = this.querySelector('.icon');
    if (this.classList.contains('collapsed')) {

      icon.innerHTML = `
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.92105 18.9211C8.92105 19.3398 9.08741 19.7414 9.38352 20.0375C9.67963 20.3336 10.0812 20.5 10.5 20.5C10.9188 20.5 11.3204 20.3336 11.6165 20.0375C11.9126 19.7414 12.0789 19.3398 12.0789 18.9211V12.0789H18.9211C19.3398 12.0789 19.7414 11.9126 20.0375 11.6165C20.3336 11.3204 20.5 10.9188 20.5 10.5C20.5 10.0812 20.3336 9.67963 20.0375 9.38352C19.7414 9.08741 19.3398 8.92105 18.9211 8.92105H12.0789V2.07895C12.0789 1.66018 11.9126 1.25857 11.6165 0.962463C11.3204 0.666353 10.9188 0.5 10.5 0.5C10.0812 0.5 9.67963 0.666353 9.38352 0.962463C9.08741 1.25857 8.92105 1.66018 8.92105 2.07895V8.92105H2.07895C1.66018 8.92105 1.25857 9.08741 0.962463 9.38352C0.666353 9.67963 0.5 10.0812 0.5 10.5C0.5 10.9188 0.666353 11.3204 0.962463 11.6165C1.25857 11.9126 1.66018 12.0789 2.07895 12.0789H8.92105V18.9211Z" fill="white"/>
      </svg>`;
    } else {
      icon.innerHTML = `
      <svg width="21" height="5" viewBox="0 0 21 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0789 4.07831H18.9211C19.3398 4.07831 19.7414 3.91195 20.0375 3.61584C20.3336 3.31973 20.5 2.91812 20.5 2.49936C20.5 2.0806 20.3336 1.67898 20.0375 1.38287C19.7414 1.08676 19.3398 0.92041 18.9211 0.92041H12.0789H8.92105H2.07895C1.66018 0.92041 1.25857 1.08676 0.962463 1.38287C0.666353 1.67898 0.5 2.0806 0.5 2.49936C0.5 2.91812 0.666353 3.31973 0.962463 3.61584C1.25857 3.91195 1.66018 4.07831 2.07895 4.07831H8.92105H12.0789Z" fill="white"/>
      </svg>`;
    }
  });
});

document.querySelectorAll('.accordion-header-why-choose').forEach((header, index) => {
  header.addEventListener('click', () => {
    const item = header.parentElement;

    const currentlyActive = document.querySelector('.accordion-item-why-choose.active');
    if (currentlyActive && currentlyActive !== item) {
      currentlyActive.classList.remove('active');
    }

    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      item.classList.add('active');
    }
  });

  if (index === 0) {
    header.parentElement.classList.add('active');
  }
});
