const containerDiv = document.getElementById("content");
import img1 from "./1.png";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import "./style.css";

function createSlide(imageSrc) {
  const slide = document.createElement("div");
  slide.classList.add("slide");

  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = "Slide";
  slide.appendChild(img);

  return slide;
}

const imageSources = [img1, img2, img3, img4];

// Create slides and append them to the slider
const slider = document.createElement("div");
slider.classList.add("slides");

imageSources.forEach((imageSrc) => {
  const slide = createSlide(`${imageSrc}`);
  slider.appendChild(slide);
});

const sliderContainer = document.createElement("div");
sliderContainer.classList.add("slider-container");
sliderContainer.appendChild(slider);

// Create buttons and append them to the slider container
const prevButton = document.createElement("button");
prevButton.classList.add("arrowBtn");
prevButton.classList.add("prev");
prevButton.innerText = "Prev";
sliderContainer.appendChild(prevButton);

const nextButton = document.createElement("button");
nextButton.classList.add("arrowBtn");
nextButton.classList.add("next");
nextButton.innerText = "Next";
sliderContainer.appendChild(nextButton);

//Add dots to the slider container

const dots = document.createElement("div");
dots.classList.add("dots");
sliderContainer.appendChild(dots);

// Append the slider container to the DOM

containerDiv.appendChild(sliderContainer);

// Get all slides
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Set the current slide to the first slide
let currentSlide = 0;

// Add event listeners to the buttons
prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  } else {
    currentSlide = slides.length - 1;
    updateSlider();
  }
});

nextButton.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlider();
  } else {
    currentSlide = 0;
    updateSlider();
  }
});
let container = document.querySelector(".slides");

function updateSlider() {
  let newOffset = currentSlide * 1200; // 500 is the width of each slide
  container.style.transform = `translateX(-${newOffset}px)`;

  // Update the dots
  dot.forEach((dot) => {
    dot.classList.remove("active");
  });
  dot[currentSlide].classList.add("active");
}

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dots.appendChild(dot);
}
const dot = document.querySelectorAll(".dot");

dot.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlider();
  });
});

dot[currentSlide].classList.add("active");

function autoAdvance() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlider();
  } else {
    currentSlide = 0;
    updateSlider();
  }
}

// Set interval for auto-advancing slides every 5 seconds
setInterval(autoAdvance, 5000);
