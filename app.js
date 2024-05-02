const counter = document.getElementById('counter');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');



function disabledButton(disabledType, isDisabled, color) {
    disabledType.disabled = isDisabled;
    disabledType.style.background = color;
}

function increaseCounter() {
    let count = parseInt(counter.textContent);
    if (count < 100) {
        counter.textContent = count + 1;
        disabledButton(reset, false, '#102a42');
    }
    if (count === 99) {
        disabledButton(increase, true, '#ccc');
    }
    disabledButton(decrease, false, '#102a42');
}


function decreaseCounter() {
    let count = parseInt(counter.textContent);
    if (count > 0) {
        counter.textContent = count - 1;
    }
    if (count === 1) {
        disabledButton(decrease, true, '#ccc');
        disabledButton(reset, true, '#ccc');
    }
    disabledButton(increase, false, '#102a42');
}

function resetCounter() {
    let count = parseInt(counter.textContent);
    counter.textContent = 0;
    if (count === 1 || count > 0) {
        disabledButton(decrease, true, '#ccc');
        disabledButton(reset, true, '#ccc');
    }
    disabledButton(increase, false, '#102a42');
}
document.addEventListener('DOMContentLoaded', function () {
    disabledButton(reset, true, '#ccc');
    disabledButton(decrease, true, '#ccc');
})

increase.addEventListener('click', increaseCounter);
reset.addEventListener('click', resetCounter);
decrease.addEventListener('click', decreaseCounter);
