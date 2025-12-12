function formatDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1; // getMonth() returns 0-11, so add 1 for 1-12
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (hours < 10) {
        hours = '0' + hours
    }
    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }

    const formattedDate = hours + ':' + minutes + '\n' + year + '/' + month + '/' + day
    document.getElementById("dateTime").innerHTML = formattedDate // formate date
 }
 
// call formateDateTime every second
setInterval(formatDateTime, 1000);

// App stack that will be used
let appStack = []
let appPositions = []

// This method is used to display the app stack accordingly in the site
function changeZIndex(elmntId) {
    // Assign a temporary variable to the selected Item
    let appCount = appStack.length
    let index = appStack.indexOf(elmntId.id)
    let temp = appStack[index]

    if (appCount > 0) {
        // If the app stack is not the last ite m in the stack then put selected
        // app on the top of the stack 
        if (appStack[appCount- 1] !== elmntId.id & appStack.length > 1) {
            // Move the selected element to the top of the array
            // Assign the app index position to an empty string
            appStack[index] = ''
            console.log('Before: ' + appStack)

            // Move the apps to one position lower
            for (let i = index; i < appCount; i++) {
                appStack[i] = appStack[i + 1]
            }
            // Place selected item on the top of the app stack
            appStack[appCount - 1] = temp
            console.log('After: ' + appStack)


            // Assign z index values of the apps
            // for (let j = 0; j < appCount; j++) {
            //     document.getElementById(appStack[j]).style.zIndex = appPositions[j].body
            //     document.getElementById(appStack[j] + '-header').style.zIndex = appPositions[j].header
            // }
            assignZVals(appStack)
        } else {
            // Assign z index values of the apps
            // for (let j = 0; j < appCount; j++) {
            //     document.getElementById(appStack[j]).style.zIndex = appPositions[j].body
            //     document.getElementById(appStack[j] + '-header').style.zIndex = appPositions[j].header
            // }
            assignZVals(appStack)
        }
    }
}

function assignZVals(arr) {
    console.log('AssignZValus array values: ' + appStack)
    for (let j = 0; j < arr.length; j++) {
        document.getElementById(appStack[j]).style.zIndex = appPositions[j].body
        document.getElementById(appStack[j] + '-header').style.zIndex = appPositions[j].header
    }
}

// Will simply push app ID to stack
function addAppToStack(elmntId) {
    // chck to see if the element is already in the array and what the display style value is
    if (!appStack.includes(elmntId) & document.getElementById(elmntId).style.display != 'none') {
        appStack.push(elmntId)

        // Update the app positions
        addAppPositions(appStack)

        // Change the index of the following
        let div = document.createElement("div");
        div.id = elmntId
        changeZIndex(div)
    } else if (appStack.length > 0) { // remove element from array
        const index = appStack.indexOf(elmntId);
        console.log('App Stack After Element Removed: ' + appStack)

        // const index2 = appPositions.indexOf(elmntId)
        if (index > -1) { // only splice array when item is found
           appStack.splice(index, 1); // 2nd parameter means remove one item only
        }

        // Update the app positions
        addAppPositions(appStack)
    }
    
    console.log(appStack)
}

function addAppPositions(apps) {
    // Make appPositions empty to add the correct header and body values for the AppStack
    appPositions.splice(0)
    // Varaibles that will be used
    iHeader = 11
    iBody = 10
    // Loop through the array of apps
    for (let i = 0; i < appStack.length; i++) {
        appPositions.push({header: iHeader, body: iBody});
        // increment values by two eah time
        iHeader += 2
        iBody += 2
    }

    // print for debugging
    appPositions.forEach(element => {
       console.log(element.header + ' ' + element.body) 
    });
}

