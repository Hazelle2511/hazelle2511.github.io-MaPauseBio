// let openNav = document.querySelector(".checkbtn");
// let navSliderSection = document.querySelector(".nav");
// let navLinks = document.querySelector(".nav__link");

// // navLinks.forEach((link) => {
// //   link.onclick = closeNavSlider;
// // });

// function closeNavSlider() {
//   navSliderSection.classList.remove("openNav");
// }

// // Scroll reveal
window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
