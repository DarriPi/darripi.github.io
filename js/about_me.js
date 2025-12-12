function aboutMe() {
    // display wallpaper menu 
    const hiddenDiv = document.getElementById('about-me')

    // display if the display is none
    if (hiddenDiv.style.display == 'none') {
        hiddenDiv.style.display = 'block'
    } else {
        hiddenDiv.style.display = 'none'
    } // #TODO: Make sure that the user does is not able to close it does way

    hiddenDiv.style.top = '150px'
    hiddenDiv.style.left = '700px' 

    // make this element draggable
    dragElement(hiddenDiv)
}


// This method will allow the user to drag the div that is displayed
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "-header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function closeAboutMe() {
  document.getElementById('about-me').style.display = 'none'
}