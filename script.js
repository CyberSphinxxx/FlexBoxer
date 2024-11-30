// DOM References
const boxContainer = document.getElementById('boxContainer');
const boxCountDisplay = document.getElementById('boxCountDisplay');
const addBoxButton = document.getElementById('addBoxButton');
const removeBoxButton = document.getElementById('removeBoxButton');
const removeAllBoxesButton = document.getElementById('removeAllBoxesButton');
const shuffleColorsButton = document.getElementById('shuffleColorsButton');

// Initialize box count based on existing boxes in DOM
let boxCount = boxContainer.children.length;

// Updates the displayed box count
function updateBoxCountDisplay() {
    boxCountDisplay.textContent = `Total Boxes: ${boxCount}`;
}

// Creates a new box element
function createBox() {
    const newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.textContent = `Box ${boxCount}`;
    newBox.style.backgroundColor = getRandomColor();
    return newBox;
}

// Add a new box
function addBox() {
    boxCount++;
    const newBox = createBox();
    boxContainer.appendChild(newBox);
    updateBoxCountDisplay();
}

// Remove the last box
function removeBox() {
    if (boxContainer.lastElementChild) {
        boxContainer.removeChild(boxContainer.lastElementChild);
        boxCount--;
        updateBoxCountDisplay();
    }
}

// Generates a random color
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Function to shuffle the colors of all boxes
function shuffleColors() {
    const boxes = boxContainer.getElementsByClassName('box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = getRandomColor();
    }
}

// Attach event listeners to buttons
addBoxButton.addEventListener('click', addBox);
removeBoxButton.addEventListener('click', removeBox);
removeAllBoxesButton.addEventListener('click', removeAllBoxes);
shuffleColorsButton.addEventListener('click', shuffleColors);

// Initial setup
updateBoxCountDisplay();

// Function to remove all boxes
function removeAllBoxes() {
    boxContainer.innerHTML = ''; // Clear all child elements
    boxCount = 0; // Reset box count
    updateBoxCountDisplay(); // Update the counter display
}
