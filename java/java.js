// SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// END OF SLIDESHOW

// SECTION SELECTION
function showSection(event){
  // changes direction of arrow
  let arrow = event.target.firstElementChild;
  arrow.innerHTML = '&uarr;';
  // finds target id
  let target = event.target.id;
  let selector = target + 'Section';
  // finds matching section-content
  let selected = document.getElementById(selector);
  // displays content
  selected.style.display = 'block';
  // finds parent holding the event listener
  let parent = event.target.parentElement
  // removes current removeEventListener
  parent.removeEventListener('click', showSection);
  // adds event listener to hide section
  parent.addEventListener('click', hideSection);
}

function hideSection(event){
  // changes direction of arrow
  let arrow = event.target.firstElementChild;
  arrow.innerHTML = '&darr;';
  // finds target id
  let target = event.target.id;
  let selector = target + 'Section';
  // finds matching section-content
  let selected = document.getElementById(selector);
  console.log(parent)
  // displays content
  selected.style.display = 'none';
  // finds parent holding the event listener
  let parent = event.target.parentElement
  // removes current removeEventListener
  parent.removeEventListener('click', hideSection);
  // adds event listener to hide section
  parent.addEventListener('click', showSection);
}
