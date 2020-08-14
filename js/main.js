//cached elements
let totalDisplay = document.getElementById('total');
let input = document.querySelector('input');

//state variables
let total; 

//event listeners
document.getElementById('plus').addEventListener('click', handleClick);
document.getElementById('minus').addEventListener('click', handleClick)

//functions
function init() {
    input.value = '1'; 
    total = 0;
    render();
}

function render() {
    totalDisplay.textContent = total;
    (total < 0) ? totalDisplay.style.color = 'red' : totalDisplay.style.color = 'black';
}

function handleClick(e) {
    (e.target.id === 'plus') ? total += parseInt(input.value) : total -= parseInt(input.value); 
    render();
}

init();