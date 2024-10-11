import "./dateNTimeWidget.js";
import "./searchWidget.js";
import "./handleModal.js";
import "./handleBookmarks.js";
import "./connectionWidget.js";
import "./manageBookmarks.js";
import "./handleShortcuts.js";
import updateInternetStatus from "./connectionWidget.js";

const gridParent = document.querySelector("#bookmarksParent");

// document.addEventListener("mousemove", (e) => {
//   gridParent.setAttribute("--x", e.x + "px");
//   gridParent.setAttribute("--y", e.y + "px");
// });

document.addEventListener("DOMContentLoaded", () => {
  updateInternetStatus();
});

const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const TOTAL = 20;
const petalArray = [];

const petalImg = new window.Image();
// petalImg.src = "https://djjjk9bjm164h.cloudfront.net/petal.png";
petalImg.src = "./assets/bg-dot.svg";

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Petal {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * 2 - canvas.height;
    this.w = 15 + Math.random();
    this.h = this.w;
    this.opacity = this.w / 2;
    this.xSpeed = Math.random() / 0.5;
    this.ySpeed = Math.random() / 0.5;
  }

  draw() {
    if (this.y > canvas.height || this.x > canvas.width) {
      this.reset();
    }
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(petalImg, this.x, this.y);
  }

  animate() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.draw();
  }
}

petalImg.onload = () => {
  for (let i = 0; i < TOTAL; i++) {
    petalArray.push(new Petal());
  }
  render();
};

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petalArray.forEach((petal) => petal.animate());
  requestAnimationFrame(render);
}
