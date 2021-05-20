// Go to top button

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Animation on Scroll

AOS.init({
    offset: 120, 
    delay: 0, 
    duration: 1000, 
    easing: 'ease',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
  
  });

  var typed = new Typed('.typed', {
    strings: ["Web Developer.","Web Designer."],
    typeSpeed: 70,
    backDelay: 1500,
    backSpeed: 30,
    loop: true,
    loopCount: 4
  });
