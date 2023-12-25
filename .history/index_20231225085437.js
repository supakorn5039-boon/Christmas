function makeSnow() {
  const snow = document.createElement("div");
  const size = Math.random() * 4.5 + 3.5;
  snow.className = "snow";
  snow.style.width = size + "px";
  snow.style.height = size + "px";
  snow
}
