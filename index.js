//slider
const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

// overlay button

const overlayButtons = document.querySelectorAll(".overlay-button");
overlayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const url = button.getAttribute("data-url");
    window.open(url, "_blank");
  });
});

var width = screen.width;
var height = screen.height;

console.log("hello", width + "*" + height);
