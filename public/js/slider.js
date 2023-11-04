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
    changeColor(buttons, slideNumber);
  } else {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
    changeColor(buttons, slideNumber);
  }
});

right.addEventListener("click", () => {
  if (slideNumber > 1) {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
    changeColor(buttons, slideNumber);
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

const buttons = document.querySelectorAll("buttonRow")

buttons[0].style.backgroundColor ="black" 

function changeColor(buttons, slideNumber){
resetBG();
buttons[slideNumber-1].style.backgroundColor = "black"
console.log(`Changed button ${slideNumber-1}`)
}

const resetBG = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  })
}



buttons.forEach((button, i)=>{
  button.addEventListener("click", () =>{
    resetBG();
    slider.style.transform = `translateX(-${i*800}px)`;
    slideNumber = i + 1;
    buttons[i].style.backgroundColor = "black"
  })
})
