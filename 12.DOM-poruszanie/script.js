//Zadanie 1
//1
const buz = document.getElementById('buz').parentNode;
console.log(buz);

//2
const brotherBaz = document.getElementById('baz').previousElementSibling;
console.log(brotherBaz);

//3
const childrenOfFoo = document.getElementById('foo').children;
console.log(childrenOfFoo);

//4
const parentOfFoo = document.getElementById('foo').parentNode;
console.log(parentOfFoo);

//5
const firstChildOfFoo = document.getElementById('foo').firstElementChild;
console.log(firstChildOfFoo);

//6
const middleChildOfFoo = document.getElementById('foo').children;
console.log(middleChildOfFoo[Math.floor(middleChildOfFoo.length / 2)]);

//Zadanie 2
function getTextOfRedSquare(id) {
    const result = document.getElementById(id);
    result.addEventListener('click', function() {
        const text = result.textContent;
        console.log(text);
    }, false);
}
getTextOfRedSquare('ex2');

//Zadanie 3 i 4
function createClickEventsForButtons() {
    const ex3 = document.getElementById('ex3');
    const buttons = ex3.getElementsByTagName('button');
    const spans = ex3.getElementsByTagName('span');
    const flags = [];

    function toggleSpan(i) {
        if(flags[i]) {
            flags[i] = false;
            spans[i].style.display = 'none';

        } else {
            flags[i] = true;
            spans[i].style.display = 'block';
        }
        
    }

    for(let i=0; i<buttons.length; i++) {
        flags.push(false);
        buttons[i].addEventListener('click', function() {
            let parentButtonNode = buttons[i].parentNode;
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            parentButtonNode.style.backgroundColor = randomColor;
            
            toggleSpan(i);
        }, false);
    }

}
createClickEventsForButtons();

//Zadanie 5
//1
function changeBCForFirstChild(selector) {
    const ex5 = document.getElementById('ex5');
    const rectangles = ex5.children;

    function onMouseMove(selector, backgroundColor) {
        const liElements = document.querySelectorAll(selector);
        for(let i=0; i<liElements.length; i++) {
            liElements[i].style.backgroundColor = backgroundColor;
        }
    }

    for(let i=0; i<rectangles.length; i++) {
        rectangles[i].addEventListener('mouseover', function() {
            let backgroundColor = rectangles[i].style.backgroundColor;
            onMouseMove(selector, backgroundColor);
        }, false);
        rectangles[i].addEventListener('mouseout', function() {
            onMouseMove(selector, 'white');
        }, false);
    }

}
//1
changeBCForFirstChild('#ex5 > ul > li:first-child');

//2
changeBCForFirstChild('#ex5 > ul > li:last-child');

//3
changeBCForFirstChild('#ex5 > ul > li:nth-child(even)');

//4
changeBCForFirstChild('#ex5 > ul > li');

//5
changeBCForFirstChild('#ex5 > ul');

//Zadanie 6

//1
const result1 = document.querySelectorAll('#ex6 > div:first-child > div:first-child > div:first-child');

//2
const firstChildEx6 = document.querySelector('#ex6 > div:first-child');
const firstParentEx6 = firstChildEx6.closest('div');
const twoNextChildrenEx6 = firstParentEx6.querySelector('div:first-child > div:first-child');
const siblingNextEx6 = twoNextChildrenEx6.nextElementSibling;
const result2 = siblingNextEx6.parentNode;

//3
const ex6 = document.querySelector('#ex6');
const bodyEx6 = ex6.parentNode;
const divFoo = bodyEx6.querySelector('div:first-child');
const parentDivFoo = divFoo.parentNode;
const result3 = parentDivFoo.querySelector('div:nth-child(2) > div:first-child > div:first-child > div:first-child');
