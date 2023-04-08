// Side Navigation Bar
function openNav() {
  document.getElementById("Sidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
}

//about me 
const aboutMe = () => {
  alert("This page is still under construction, you will able to access to this page soon")
}

//color change on scroll of fixed header 
window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  let scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


//search bar
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert("unexpected error, please click the menu on top right corner to get codes");
});

// already in this code
const alr = () => {
  alert("You are already in this page")
}

