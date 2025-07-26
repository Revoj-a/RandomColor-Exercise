const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
  const newColor = makeRandColor();
  const rgb = getRGBComponents(newColor);
  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);

  document.body.style.backgroundColor = newColor;

  if (luminance < 128) {
    h1.style.color = "white";
  } else {
    h1.style.color = "black";
  }

  h1.innerText = newColor;
  h1.style.fontFamily = "Arial";
  h1.style.fontSize = "30px";
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

function getRGBComponents(rgbString) {
  const result = rgbString.match(/\d+/g).map(Number);
  return { r: result[0], g: result[1], b: result[2] };
}

function getLuminance(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}
