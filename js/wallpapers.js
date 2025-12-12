// THIS WILL ALLOW THE USER TO CHANGE WALLPAPERS
function wallpapers() {
    // display wallpaper menu 
    const hiddenDiv = document.getElementById('wallpapers')

    // display if the display is none
    if (hiddenDiv.style.display == 'none') {
        hiddenDiv.style.display = 'block'
    } else {
        hiddenDiv.style.display = 'none'
    } // #TODO: Make sure that the user does is not able to close it does way

    hiddenDiv.style.top = '110px'
    hiddenDiv.style.left = '300px'

    let wallpapers = [ 
        ['images/backgrounds/1.png', 'images/backgrounds/2.png'], 
        ['images/backgrounds/3.png', 'images/backgrounds/4.png'],
        ['images/backgrounds/5.png', 'images/backgrounds/6.png'],
        ['images/backgrounds/7.png', 'images/backgrounds/8.png'],
        ['images/backgrounds/9.png', 'images/backgrounds/10.jpg'],
        ['images/backgrounds/snow_winter.gif', 'images/backgrounds/road_trip.gif']
    ]

    // make sure that wallpaper-images is empty
    document.getElementById('wallpapers-images').innerHTML = ''
    let imageCount = 0
    for (let row = 0; row < wallpapers.length; row++) {
        let rowBegin = '<div class="row">'
        let rowEnd = '</div>'
        let content = ''

        // add content
        for (let col = 0; col < wallpapers[row].length; col++) {
            // add to the content
            content += '<div id="' + (wallpapers[row][col]) + '" class="col" onclick="changeBackground(this.id)">' + '<img class="img-fluid mt-3 wallpaper-image" src=' + wallpapers[row][col]  + '>' + '</div>'
            imageCount += 1
        }
        

        // dispaly content in inner div
        content = rowBegin + content + rowEnd
        document.getElementById('wallpapers-images').innerHTML += content
        content = ''
    }

    // make this element draggable
    dragElement(hiddenDiv)
}

/// This function will simply change the background
function changeBackground(imageId) {
    let imageURL = 'url("' + imageId + '")'
    console.log(imageURL)

    // set background image
    document.body.style.backgroundImage = imageURL
}

/// This method will allow the user to drag the div that is displayed
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
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

// this will simply close the wallpapers div
function closeWallpapers() {
    document.getElementById('wallpapers').style.display = 'none'
}