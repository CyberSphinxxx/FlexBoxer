// DOM References
const boxContainer = document.getElementById('boxContainer');
const boxCountDisplay = document.getElementById('boxCountDisplay');
const addBoxButton = document.getElementById('addBoxButton');
const removeBoxButton = document.getElementById('removeBoxButton');

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

// Attach event listeners to buttons
addBoxButton.addEventListener('click', addBox);
removeBoxButton.addEventListener('click', removeBox);

// Initial setup
updateBoxCountDisplay();
