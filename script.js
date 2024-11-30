const boxContainer = document.getElementById('boxContainer');
let boxCount = 10;

function addBox() {
    boxCount++;
    const newBox = document.createElement('div');
    newBox.className = `box box${boxCount}`;
    newBox.textContent = `Box ${boxCount}`;
    boxContainer.appendChild(newBox);
}

function removeBox() {
    if (boxContainer.lastElementChild) {
        boxContainer.removeChild(boxContainer.lastElementChild);
        boxCount--;
    }
}

