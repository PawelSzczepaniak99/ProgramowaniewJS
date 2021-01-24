//Zadanie 1
const moreDivs = document.querySelectorAll('#myDiv > .more-divs');

function returnMoreDivs(moreDivs) {
    const result = [];
    moreDivs.forEach(element => {
        result.push(element);
    });
    return result;
}
const returnedMoreDivs = returnMoreDivs(moreDivs);
console.log(returnedMoreDivs);

//Zadanie 2
const shortList = document.querySelector('ul.short-list');
function exercises2(element) {
    console.log(element.innerHTML);
    console.log(element.outerHTML);

    const array = element.classList;
    let classesString = "";
    array.forEach(item => {
        classesString += item;
    });

    console.log(classesString);
    console.log(element.classList);
    console.log(element.dataset);
}
exercises2(shortList);

//Zadanie 3
const datasetCheck = document.querySelector('#datasetCheck');
const num1 = Number(datasetCheck.dataset.numberone);
const num2 = Number(datasetCheck.dataset.numbertwo);
const num3 = Number(datasetCheck.dataset.numberThree);

function computeNumbers(num1, num2, num3) {
    let add = num1 + num2 + num3;
    let sub = num1 - num2 - num3;
    return add - sub;
}
let computedNumbersResult = computeNumbers(num1, num2, num3);

//Zadanie 4
document.querySelector('#spanText').textContent = 'Mateusz Drzyzga';

//Zadanie 5
document.querySelector('#spanText').classList.add('my-class');

//Zadanie 6
const classes = document.querySelector('#classes');
function processClasses(classes) {
    let list = classes.classList;
    let classesStringWithPlus = "";
    for(let i=0; i<list.length; i++) {
        console.log(list[i]);
        if(i === list.length - 1) {
            classesStringWithPlus += list[i];
            break;
        }
        classesStringWithPlus += list[i] + "+";
    }
    console.log(classesStringWithPlus);

    classes.className = '';
    console.log('Usunięto wszystkie klasy');
}
processClasses(classes);

//Zadanie 7
const liLongList = document.querySelectorAll('#longList > li');
function addAttributes(liLongList) {
    liLongList.forEach(element => {
        if(!element.hasAttribute('data-text')) {
            element.setAttribute('data-text', 'text');
        }
    });
}
addAttributes(liLongList);

//Zadanie 8
function createClass(str) {
    return { newClass: str };
}
const newObject = createClass('new_class');

function readObject(object) {
    const valueObject = object.newClass;
    document.querySelector('#myDiv').classList.add(valueObject);
}
readObject(newObject);

//Zadanie 9
let randomNumber = Math.floor(Math.random() * (11 - 0));
function setClass(randomNumber) {
    const numbers = document.querySelector('#numbers');
    if(randomNumber % 2 == 0) {
        numbers.classList.add('even');
    } else {
        numbers.classList.add('odd');
    }
}
setClass(randomNumber);

//Zadanie 10
const longList = document.querySelector('#longList');
function returnLiElementsValues(longList) {
    const liLongList = longList.querySelectorAll('li');
    const result = [];
    liLongList.forEach(element => {
        result.push(element.textContent);
    });
    return result;
}
const values = returnLiElementsValues(longList);

//Zadanie 11
const liLongListElements = document.querySelectorAll('#longList > li');
function changeValuesAndAttributes(liLongListElements) {
    liLongListElements.forEach(element => {
        let randomNumber = Math.floor(Math.random() * (11 - 0));

        element.setAttribute('data', element.textContent);
        element.textContent = randomNumber;
    });
}
changeValuesAndAttributes(liLongListElements);