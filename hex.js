const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colorText = document.querySelector(".color");  // Teks "Background color:"
const container = document.querySelector(".container"); // Container dengan teks "Background Color:"
const main = document.querySelector("main"); // Elemen main yang mencakup konten

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  
  // Update background color of body
  document.body.style.backgroundColor = hexColor;

  // Update background color of the main container and text
  main.style.backgroundColor = hexColor;
  container.style.backgroundColor = hexColor;
  colorText.textContent = hexColor;

  // Set border color for the container and text
  container.style.border = `2px solid ${hexColor}`;
  colorText.style.border = `2px solid ${hexColor}`;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
