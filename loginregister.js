var slideIndex = 0;
carousel();

function carousel() {
  var cars = ["images/g10.gif","images/g4.gif", "images/g14.gif", "images/g12.gif","images/g8.gif","images/g3.gif","images/g6.gif"];

  var y = document.getElementById("disp");
  slideIndex++;
  if (slideIndex > cars.length) {slideIndex = 1}
  
  y.src=cars[slideIndex-1];
  
  setTimeout(carousel, 7000); // Change image every 2 seconds
}