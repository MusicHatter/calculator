
const startButton = document.querySelector('.start-button'),
    mainForm = document.querySelector('.main-form'),
    firstScreen = document.querySelector('.first-screen'),
    formCalculate = document.querySelector('.form-calculate'),
    endButton = document.querySelector('.end-button'),
    totalElem = document.querySelector('.total'),
    fastRange = document.querySelector('.fast-range');

function showElem(elem) {
    elem.style.display = 'block';
}

function hideElem(elem) {
    elem.style.display = 'none';
}

function handlerCallBackForm(event) {
    const target = event.target;

    if (target.classList.contains('want-faster')) {
        if (target.checked) {
            showElem(fastRange);
        } else {
            hideElem(fastRange);
        }
    }
};

startButton.addEventListener('click', function() {
    hideElem(firstScreen);
    showElem(mainForm);
});

endButton.addEventListener('click', function() {
    
    for (const elem of formCalculate.elements) {
        if (elem.tagName === 'FIELDSET') {
            hideElem(elem);
        }
    }

    showElem(totalElem);
});

formCalculate.addEventListener('change', handlerCallBackForm)