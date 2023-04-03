const removeActiveClasses = () => {
    slideElement.forEach((slide) => {
      slide.classList.remove("active");
    });
  };
  
const slideElement = document.querySelectorAll(".slide");
slideElement.forEach((slide) => {
  slide.addEventListener("click", () => {
    removeActiveClasses();
    slide.classList.add("active");
  });
});