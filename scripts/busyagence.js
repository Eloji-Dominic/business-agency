// import { Sliders } from "../Adex/data/business-data.js";
// export const Sliders = [
//   {image: "../Adex/assets/images/hero-slide-1.jpg"},
//   {image: "../Adex/assets/images/hero-slide-2.jpg"},
//   {image: "../Adex/assets/images/hero-slide-3.jpg"}
// ];

const headbar = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  headbar.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});

const addEventonElements = function(elements, eventType, callback){
  elements.forEach((element) => {
    element.addEventListener(eventType, callback);
  })
}
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglenavbar = function(){
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};
addEventonElements(navTogglers, "click", togglenavbar);

// const generateSlider = () => {
//   let slides = "";
//   Sliders.forEach((slider) => {
//     slides += `
//       <li class="slider-item">
//         <figure class="img-holder" style="--width: 575; --height: 558;">
//           <img src="${slider.image}" alt="hero banner" class="img-cover">
//         </figure>
//       </li>
//     `;
//   })
//   return slides;
// };
// const slideContainer = document.querySelector("[data-slider-container]");
// slideContainer = generateSlider();
// console.log(slideContainer);

// Sliders
const sliders = document.querySelectorAll("[data-slider]");
const initSlider = function(){
  const sliderContainer = document.querySelector("[data-slider-container]");
  const sliderPrevBtn = document.querySelector("[data-slider-prev]");
  const sliderNextBtn = document.querySelector("[data-slider-next]");

  // Iterator Tracker
  let currentSlidePos = 0; 

  const moveSliderItem = function(){
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  }
  // Next slide
  const slideNext = function() {
    const slideEnd = currentSlidePos >= sliderContainer.childElementCount - 1;
    if(slideEnd){
      currentSlidePos = 0;
    } else{
      currentSlidePos++;
    }
    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  // previous slide
  const slidePrev = function(){
    if(currentSlidePos <= 0){
      currentSlidePos = sliderContainer.childElementCount - 1;
    }else{
      currentSlidePos--;
      moveSliderItem();
    }
  }
  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sliderContainer.childElementCount <= 0;
  if(dontHaveExtraItem){
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }
}

sliders.forEach((slider) => {
  return initSlider(slider);
});

const accordions = document.querySelectorAll("[data-accordion]");
let lastActiveAccordion = accordions[0];
const initAccordion = function(currentAccordion){
  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");
  const expandAccordion = function(){
    if(lastActiveAccordion && lastActiveAccordion !== currentAccordion){
      lastActiveAccordion.classList.remove("expanded");
    }
    currentAccordion.classList.toggle("expanded");
    lastActiveAccordion = currentAccordion;
  }
  accordionBtn.addEventListener("click", expandAccordion);
}
accordions.forEach((accordion) => {
  return initAccordion(accordion);
});