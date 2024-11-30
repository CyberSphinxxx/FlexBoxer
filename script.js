const boxContainer = document.getElementById('boxContainer');
let boxCount = 5;

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

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function addBox() {
    boxCount++;
    const newBox = document.createElement('div');
    newBox.className = `box box${boxCount}`;
    newBox.textContent = `Box ${boxCount}`;
    newBox.style.backgroundColor = getRandomColor();
    boxContainer.appendChild(newBox);
}
