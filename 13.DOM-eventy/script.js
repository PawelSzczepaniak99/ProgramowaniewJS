//Zadanie 1
function startEvents() {
    //1
    const testEventButton = document.getElementById('test-event');
    testEventButton.addEventListener('click', function(event) {
        console.log(event);
        /*
            The event object provides data about coordinates of mouse pointer
            coordinates of button ... timestamp and .. so on..
        */
    }, false);

    //2
    window.addEventListener('mousemove', function(event) {
        console.log(event); // the same data
    }, false);

    //3
    testEventButton.addEventListener('mousemove', function(event) {
        console.log(event); // the same data
    }, false);

    //4
    window.addEventListener('keydown', function(event) {
        console.log(event);
        /*
            the event object provides timestamp, keyCode, key, altKey(if pressed)
            ctrlKey (if pressed) data
        */
    }, false);

    //5
    window.addEventListener('scroll', function(event) {
        console.log(event); // info: timestamp, type event, target
    }, false);

    //6
    const input = document.getElementById('input-test');
    input.addEventListener('change', function(event) {
        console.log(event); // event properties: timestamp, target, returnValue, type
    });
}
// startEvents();

//Zadanie 2
function onClickButtonEx2() {
    const button = document.getElementById('ex2');
    button.addEventListener('click', function(event) {
        const data = button.getAttribute('data-text');
        const span = document.getElementById('span-ex2');
        span.textContent = data;
    }, false);
}
// onClickButtonEx2();

//Zadanie 3
function changeSquareBackgroundColor() {
    const square = document.getElementById('ex3');
    square.addEventListener('mouseover', function() {
        square.style.backgroundColor = 'blue';
    }, false);
    square.addEventListener('mouseout', function() {
        square.style.backgroundColor = 'red';
    }, false);
}
changeSquareBackgroundColor();

//Zadanie 4
function validateInput() {
    const regexp = /\d+/g;
    const input = document.getElementById('input-test');
    const span = document.getElementById('ex3-err');
    input.addEventListener('change', function(event) {
        if(regexp.test(input.value)) {
            span.textContent = 'You can not input numbers!';
        }else {
            span.textContent = '';
        }
    });
}
validateInput();

//Zadanie 5
function countClicks() {
    let counter = 0;
    const span = document.getElementById('span-ex2');
    const button = document.getElementById('ex2');

    let handler = function() {
        counter++;
        span.textContent = counter;
        if(counter === 11) {
            span.textContent = '';
            this.removeEventListener('click', handler);
        }
    }
    button.addEventListener('click', handler);
}
countClicks();

//Zadanie 6
function controlScroll() {
    window.addEventListener('scroll', function() {
        let scrollValue = this.scrollY;
        if(scrollValue > 200) {
            window.document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
        } else {
            window.document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
        }
    }, false);
}
controlScroll();

//Zadanie 7
function calculator() {
    const buttons = document.querySelectorAll('#calculator > div:nth-child(4) > button');
    const input = document.querySelector('#calculator > input:first-child');

    for(let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(i + 1 === 10) {
                input.value += 0;
            } else {
                input.value += i + 1;
            }
            
        }, false);
    }
    const specialButtons = document.querySelectorAll('#calculator > div:nth-child(5) > button')

    for(let i=0; i<specialButtons.length; i++) {
        specialButtons[i].addEventListener('click', function() {
            if(specialButtons[i].textContent.includes('+')) {
                input.value += '+';
            } else if(specialButtons[i].textContent.includes('-')) {
                input.value += '-';
            } else if(specialButtons[i].textContent.includes('*')) {
                input.value += '*';
            } else {
                input.value += '/';
            }
        }, false);
    }
    const regexp = /-?\d+[+-/*]{1}-?\d+/g;
    let result = 0;
    input.addEventListener('blur', function() {
        if(regexp.test(input.value)) {
            if(input.value.includes('+')) {
                result = split('+', input);
            } else if(input.value.includes('/')) {
                result = split('/', input);
            } else if(input.value.includes('*')) {
                result = split('*', input);
            } else if(input.value.includes('-')) {
                result = split('-', input);
            }
            input.value = result;
        } else {
            console.log('Nieprawidłowa komenda');
        }
    })
}

function split(operator, input) {
    let splitInputValue = [];
    let count = 0;
    if(operator === '-') {
        count = 0;
        for(let i=0; i<input.value.length; i++) {
            if(input.value.charAt(i) === '-') count++;
        }

        if(count > 1) {
            splitInputValue = input.value.split(operator).slice(count - 1);
        } else {
            splitInputValue = input.value.split(operator);
        }
    } else {
        splitInputValue = input.value.split(operator);
    }
    let result = 0;
    if(input.value.includes('+')) {
        result = Number(splitInputValue[0]) + Number(splitInputValue[1]);
    } else if(input.value.includes('/')) {
        if(splitInputValue[1] === 0) {
            console.log('Przez zero nie podzielisz');
            return;
        }
        result = splitInputValue[0] / splitInputValue[1];
    } else if(input.value.includes('*')) {
        result = splitInputValue[0] * splitInputValue[1];
    } else if(input.value.includes('-')) {
        if(count === 2) {
            splitInputValue[0] = -Math.abs(splitInputValue[0]);
        }
        result = splitInputValue[0] - splitInputValue[1];
    }
    return result;
}
calculator();
