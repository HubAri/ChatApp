const left = document.querySelector(".leftArrow");
const right = document.querySelector(".rightArrow");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const footer = document.querySelector(".footer")

let slideNumber = 1;

left.addEventListener("click", () => {
  if (slideNumber < images.length) {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
  } else {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
  }
});

right.addEventListener("click", () => {
  if (slideNumber > 1) {
    slider.style.transform = `translateX(-${800}px)`;
    slideNumber--;
  } else {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
  }
});

for (let i= 0; i<images.length; i++){
  const div = document.createElement("buttonRow")
  div.className = "buttonRow";
  footer.appendChild(div)
}