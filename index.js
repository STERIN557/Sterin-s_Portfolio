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

setTimeout(() => {
  printText();
}, 1000);

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

const linkedIn = document.getElementById("linkedIn");
const github = document.getElementById("gitHub");

const messager = document.getElementById("messenger");
const bibleApp = document.getElementById("bibleApp");
const GitHubW = document.getElementById("GitHubW");

messager.addEventListener("click", () => {
  window.location.href = "https://mysterious-lowlands-35269.herokuapp.com";
});

bibleApp.addEventListener("click", () => {
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.bibleOffline.bibleforall";
});

GitHubW.addEventListener("click", () => {
  window.location.href = "https://github.com/STERIN557";
});

linkedIn.addEventListener("click", () => {
  window.location.href = "https://www.linkedIn.com/in/sterin-saji";
});

github.addEventListener("click", () => {
  window.location.href = "https://github.com/STERIN557";
});

// const sideBar = document.getElementById("sideBar");

// document.body.addEventListener("mousemove", () => {
//   //   console.log("yes");
//   //   alert("dfsd");
//   sideBar.style.right = 7 + "px";
// });

// document.body.addEventListener("mouseout", () => {
//   //   console.log("yes");
//   //   alert("dfsd");
//   sideBar.style.right = -10 + "rem";
// });
