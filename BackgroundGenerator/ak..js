const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const direction = document.getElementById('direction');

function updateBackground() {
    const color1Value = color1.value;
    const color2Value = color2.value;
    const directionValue = direction.value;
    document.body.style.background = `linear-gradient(${directionValue}, ${color1Value}, ${color2Value})`;
}

color1.addEventListener('input', updateBackground);
color2.addEventListener('input', updateBackground);
direction.addEventListener('change', updateBackground);
