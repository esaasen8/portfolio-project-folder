console.log("Hey! Happy To Have You On My Portfolio Site.")

/* Menu Toggle */


function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } 
    else {
      x.className = 'navtoggle';
    }
}


/*
// Get the elements
const menuToggleButton = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Function to toggle the class that controls visibility
function toggleMenu() {
    navMenu.classList.toggle("show");
}

// Add the event listener to the button
menuToggleButton.addEventListener("click", toggleMenu);

/* Scroll to top */

/*
let mybutton = document.getElementById("scroll_button");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


/* Enlarge image */

/*
function enlargeImage(imgElement) {
    // Create an overlay div
    var overlay = document.createElement("div");
    overlay.id = "image-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "1000";
    
    // Create a close button
    var closeButton = document.createElement("span");
    closeButton.textContent = "×";
    closeButton.style.position = "absolute";
    closeButton.style.top = "20px";
    closeButton.style.right = "20px";
    closeButton.style.fontSize = "30px";
    closeButton.style.color = "#fff";
    closeButton.style.cursor = "pointer";
    closeButton.onclick = function() {
        document.body.removeChild(overlay);
    };
    
    // Append the close button to the overlay
    overlay.appendChild(closeButton);
    
    // Create the enlarged image
    var enlargedImg = document.createElement("img");
    enlargedImg.src = imgElement.src;  // Set the source to the clicked image's source
    enlargedImg.style.maxWidth = "90%";
    enlargedImg.style.maxHeight = "90%";
    
    // Append the image to the overlay
    overlay.appendChild(enlargedImg);
    
    // Append the overlay to the body
    document.body.appendChild(overlay);
}

*/