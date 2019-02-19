// SLIDESHOW

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(carousel, 4000); // Change image every 4 seconds
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
      selected.style.width = 'calc(100% - 2em)';
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
  // displays content
  selected.style.display = 'none';
  // finds parent holding the event listener
  let parent = event.target.parentElement
  // removes current removeEventListener
  parent.removeEventListener('click', hideSection);
  // adds event listener to hide section
  parent.addEventListener('click', showSection);
}

// END OF SECTION SELECTION
manageMenus();
let w = window.innerWidth;
function manageMenus(){

if(w < 480){
  const menu = document.querySelector('#navi');
  if(menu.classList.contains === 'open'){
    menu.classList.remove('open');
  }
}
if(w > 480){
  if(menu.classList.contains !== 'open'){
    menu.classList.add('open');
  }
}
}

window.addEventListener("resize", manageMenus);

  // show menu on burger icon click
    function showMenu(){
      const menuButton = document.querySelector("#burgerMenu");
      const navi = document.querySelector("#navi");
      const menuLink = document.querySelector(".nav-list");
      console.log("show menu")
      // add open to navi list
      navi.classList.add("open");
      // remove event listener to show menu
      menuButton.removeEventListener("click", showMenu);
      // add event listener to hide menu
      menuButton.addEventListener("click", hideMenu);
      // add hidemenu event listener to menu items
      menuLink.addEventListener("click", hideMenu);
    }
  // hide menu on icon click
    function hideMenu(){
      const menuButton = document.querySelector("#burgerMenu");
      const navi = document.querySelector("#navi");
      const menuLink = document.querySelector(".nav-list");
      // remove open from navi list
      navi.classList.remove("open");
      // add event listener to menu button to show menu
      menuButton.addEventListener("click", showMenu);
      // add event listener to menu button to hide menu
      menuButton.removeEventListener("click", hideMenu);
    }
