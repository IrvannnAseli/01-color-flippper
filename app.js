const colors = [
    "green", "red", "rgba(133,122,200)", "#f15025", "#ff5733", "#33ff57", 
    "#33c1ff", "#ff33d4", "#ffb833", "#61b3ff", "#a5ff33", "#ff5733", "#f8a1d4",
    "#ff6f61", "#8e44ad", "#3498db", "#2ecc71", "#f39c12", "#e74c3c", "#9b59b6", 
    "#34495e", "#1abc9c", "#ecf0f1", "#16a085", "#e67e22", "#f39c12", "#7f8c8d"
  ];
  const btn = document.getElementById("btn");
  const colorText = document.querySelector(".color");  // Teks "Background color:"
  const container = document.querySelector(".container"); // Container dengan teks "Background Color:"
  const main = document.querySelector("main"); // Elemen main yang mencakup konten
  
  btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    const selectedColor = colors[randomNumber];
    
    // Update background color of body
    document.body.style.backgroundColor = selectedColor;
  
    // Update background color of the main container and text
    main.style.backgroundColor = selectedColor;
    container.style.backgroundColor = selectedColor;
    colorText.textContent = selectedColor;
  
    // Set border color for the container and text
    container.style.border = `2px solid ${selectedColor}`;
    colorText.style.border = `2px solid ${selectedColor}`;
  });
  
  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }
  