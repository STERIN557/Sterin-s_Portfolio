"use strict";

// sound data

// const dataSrc = "./audio/button.mp3";

// const sound = document.createElement("audio");
// sound.src = dataSrc;
// sound.setAttribute("preload", "audio");
// // sound.setAttribute("controls", "none");
// sound.style.display = "none";
// document.body.appendChild(sound);

// function play() {
//   sound.play();
// }

// function pause() {
//   sound.pause();
// }

const htmlToPutText = document.getElementById("MyMessage");
const valueForMessage = [
  "H",
  "i",
  ".",
  ".",
  ".",
  " ",
  "T",
  "h",
  "i",
  "s",
  " ",
  "I",
  "s",
  " ",
  "S",
  "te",
  "ri",
  "n",
  " ",
  "S",
  "a",
  "j",
  "i",
  "<br>",
  " ",
  "I",
  " ",
  "am",
  " ",
  "a",
  " ",
  "web",
  " ",
  "De",
  "ve",
  "lop",
  "er",
];

let lengthS = valueForMessage.length;
let startingPoint = 0;

function printText() {
  let interVal = setInterval(() => {
    if (startingPoint < lengthS) {
      //   play();
      htmlToPutText.innerHTML += valueForMessage[startingPoint];
      startingPoint++;
      //   pause();
    } else {
      endStuff(interVal);
    }
  }, 100);
}

function endStuff(interval) {
  clearInterval(interval);
}

// setTimeout(() => {
//   printText();
// }, 1000);

// click on the scrollView

const clickImageS = document.querySelectorAll(".imagess");
const home = document.getElementById("mainPage");
const courses = document.getElementById("courseOut");
const technology = document.getElementById("techOut");
const project = document.getElementById("proOut");
const social_network = document.getElementById("aboutOut");
const buttonArray = [home, courses, technology, project, social_network];

for (let o = 0; o < clickImageS.length; o++) {
  clickImageS[o].addEventListener("click", () => {
    console.log("fsdf");
    buttonArray[o].scrollIntoView();
  });
}
