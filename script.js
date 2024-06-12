var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

var manualNav = function (manual) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  buttons[manual].classList.add("active");
};

buttons.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    manualNav(i);
    currentSlide = i;
  });
});

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  reveals.forEach((reveal) => {
    var windowHeight = window.innerHeight;
    var revealTop = reveal.getBoundingClientRect().top;
    var revealPoint = 40;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}

var btnSubmit = document.querySelector(".submit");
var modal = document.querySelector(".modal-container");

if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    modal.classList.add("show");

    const next = document.querySelector(".next");
    next.setAttribute(
      "value",
      "https://personal-blog-amira.netlify.app/contact.html"
    );
  });
}

function changeIcon(element) {
  element.setAttribute("src", "assets/arrow-down.png");
}

function changeIconBack(element) {
  element.setAttribute("src", "assets/up-arrow.png");
}

var codingProjects = document.querySelectorAll(".reveal");
codingProjects.forEach((project, index) => {
  project.dataset.aos = "fade-down";
  project.dataset.aosDuration = 1500;
  project.dataset.aosDelay = index * 100;
});

AOS.init({
  once: true,
});
