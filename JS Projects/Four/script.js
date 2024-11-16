var elem = document.querySelectorAll(".elem");

var elem1Img = document.querySelectorAll(" img");

elem.addEventListener("mousemove", (res) => {
  elem1Img.style.left = res.x + "px";
  elem1Img.style.top = res.y + "px";
});
elem.addEventListener("mouseenter", (res) => {
  elem1Img.style.opacity = 1;
});
elem.addEventListener("mouseleave", (res) => {
  elem1Img.style.opacity = 0;
});
