//your JS code here. If required.
// select the div
let div = document.getElementById('sizeInfo');

// create the h1 element
let h1 = document.createElement('h1');

// append the h1 to the div
div.appendChild(h1);

// function to update the size
function updateSize() {
    h1.textContent = 'Width: ' + window.innerWidth + ' and Height: ' + window.innerHeight;
}

// set the initial size
updateSize();

// update the size whenever the window is resized
window.addEventListener('resize', updateSize);