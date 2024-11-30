const boxContainer = document.getElementById('boxContainer');
const boxCountDisplay = document.getElementById('boxCountDisplay');

// Initialize box count based on current number of child elements
function initializeBoxCount() {
    return boxContainer.children.length;
}

let boxCount = initializeBoxCount();

// Update the displayed count
function updateBoxCountDisplay() {
    boxCountDisplay.textContent = `Total Boxes: ${boxCount}`;
}

// Add a new box
function addBox() {
    boxCount++;
    const newBox = document.createElement('div');
    newBox.className = `box box${boxCount}`;
    newBox.textContent = `Box ${boxCount}`;
    newBox.style.backgroundColor = getRandomColor();
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

// Generate a random color
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Initial count update based on existing boxes
updateBoxCountDisplay();
