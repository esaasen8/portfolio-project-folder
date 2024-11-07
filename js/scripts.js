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

