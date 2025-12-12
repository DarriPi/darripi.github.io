// // variables that will be used
const inputCommand = document.getElementById('display-projects')
// const container = document.getElementById('project-table-container')
// const table = document.createElement('table')
// const thead = document.createElement('thead')
// const headerRow = document.createElement('tr')
// const tbody = document.createElement('tbody')
// // const projects = {
// //     'Project': ['Music Player', 'Laser Tag Game'],
// //     'Desciption': ['Plays music', 'Shoot people'],
// //     'Link': ['yt', 'github']
// // }
// const projects = [
//             { Project: 'Alice', Desciption: 30, Link: 'New York' },
//             { Project: 'Jake', Desciption: 40, Link: 'Joburg' },
//     ];

function projectViewer() {
    // display wallpaper menu 
    const hiddenDiv = document.getElementById('project')

    // display if the display is none
    if (hiddenDiv.style.display == 'none') {
        hiddenDiv.style.display = 'block'
    } else {
        hiddenDiv.style.display = 'none'
    } // #TODO: Make sure that the user does is not able to close it does way

    hiddenDiv.style.top = '15px'
    hiddenDiv.style.left = '715px' 

    // make this element draggable
    dragElement(hiddenDiv)
}

/// This method will allow the user to drag the div that is displayed
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

// This function will display the projects
function displayProjects() {
//     for (const key in projects[0]) {
//         const th = document.createElement('th')
//         thead.textContent = key;
//         headerRow.appendChild(th);
//     }
//     thead.appendChild(headerRow)
//     table.appendChild(thead)

//     // create table body
//     const tbody = document.createElement('tbody')
//     projects.forEach(rowData => {
//         const row = document.createElement('tr')
//         for (const key in rowData) {
//             const td = document.createElement('td')
//             td.textContent = rowData[key]
//             row.appendChild(td)
//         }
//         tbody.appendChild(row)
//     })
//     table.appendChild(tbody)

//     container.appendChild(table)
//
    
}


inputCommand.addEventListener('keydown', function(event) {
    // check if it is enter key
    if (event.key == 'Enter') {
        if (inputCommand.value.toLowerCase() == 'ls projects') {
          document.getElementById("project-table").style.display = 'table'
          document.getElementById('experience-table').style.display = 'none'
        } 
        else if (inputCommand.value.toLowerCase() == 'ls experience') {
          document.getElementById("project-table").style.display = 'none'
          document.getElementById('experience-table').style.display = 'table'
        }
        else if (inputCommand.value.toLowerCase() == 'exit') {
          closeProject()
          addAppToStack('project')
        }
        else {
            console.log("Not valid command")
            alert("Not a valid command.")
        }
    } 
})

function selectInputField() {
  const inputField = document.getElementById('display-projects')

  inputField.focus()
  inputField.select()
}

// will simply close project app
function closeProject() {
  document.getElementById('project').style.display = 'none'
}