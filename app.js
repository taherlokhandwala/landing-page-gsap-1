const header = document.querySelector(".header");
const menuIcon = document.querySelector(".menu-icon");
const mainImage = document.querySelector(".main-image");
const slider = document.querySelector(".slider");
const headline = document.querySelector(".main-image h3");

const tl = new TimelineMax();

tl.fromTo(
  mainImage,
  1,
  { height: "0%" },
  { height: "70%", ease: Power2.easeInOut }
)
  .fromTo(
    mainImage,
    1.2,
    { width: "100%" },
    { width: "70%", ease: Power2.easeInOut }
  )
  .fromTo(headline, 1.2, { opacity: 0 }, { opacity: 1 }, "-=1.2")
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(header, 0.5, { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, "-=0.5");
