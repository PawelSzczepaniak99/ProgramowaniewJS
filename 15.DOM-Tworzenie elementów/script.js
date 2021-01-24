//Zadanie 1
const div = document.createElement('div');
div.textContent = 'To jest nowy element';

document.querySelector('#root').appendChild(div);

//Zadanie 2
const ul = document.createElement('ul');
const fruits = ['Apple', 'Orange', 'Banana', 'Strawberry', 'Pineapple', 'Blackberry'];
for(let i=0; i<6; i++) {
    const li = document.createElement('li');
    li.textContent = fruits[i];
    ul.appendChild(li);
}
document.querySelector('#root').appendChild(ul);

//Zadanie 3
window.addEventListener('load', function() {
    const lis = document.querySelectorAll('#root ul:nth-child(2) > li');
    const result = [];
    for(let i=0; i<lis.length; i++) {
        if(i % 2 == 0) {
            lis[i].remove();
        }
    }
});

//Zadanie 4
const button = document.createElement('button');

button.addEventListener('click', function() {
    this.remove();
}, false);
document.querySelector('#root').appendChild(button);

//Zadanie 5
let randomNumber = Math.floor(Math.random() * (11 - 0));
for(let i=0; i<randomNumber; i++) {
    const div = document.createElement('div');
    div.textContent = 'to jest div numer ' + (i + 1);
    document.querySelector('#root').appendChild(div);
}

//Zadanie 6
const object = { 
    div1: 'to jest div', 
    span1: 'to jest span', 
    div2: { div3: 'to jest div' }, 
    span2: 'to jest span',
}

function cutNumberInString(str) {
    let result = "";
    for(let i=0; i<str.length; i++) {
        if(/\d/.test(str.charAt(i))) {
            continue;
        }
        result += str.charAt(i);
    }
    return result;
}

for(let key in object) {
    let newKey = cutNumberInString(key);
    let element = null;
    if(typeof object[key] === 'object') {
        element = document.createElement(newKey);
        let tmp = null;
        for(let key2 in object[key]) {
            const newKey2= cutNumberInString(key2);
            tmp = document.createElement(newKey2);
            tmp.textContent = object[key][key2];
        }
        element.appendChild(tmp);
    } else {
        element = document.createElement(newKey);
        element.textContent = object[key];    
    }
    document.querySelector('#root').appendChild(element);
}

//Zadanie 7
const ul1 = document.createElement('ul');
const button1 = document.createElement('button');
button1.textContent = 'First list';

for(let i=0; i<6; i++) {
    const li = document.createElement('li');
    li.textContent = i + 1;
    ul1.appendChild(li);
}

const ul2 = document.createElement('ul');
const button2 = document.createElement('button');
button2.textContent = 'Second list';

document.querySelector('#root').appendChild(ul1);
document.querySelector('#root').appendChild(button1);
document.querySelector('#root').appendChild(ul2);
document.querySelector('#root').appendChild(button2);

const root = document.querySelector('#root');
const uls = root.getElementsByTagName('ul');

button1.addEventListener('click', function() {
    const ul1 = uls[1];
    const ul1Li = ul1.querySelectorAll('li');
    if(ul2.querySelectorAll('li').length === 0) {
        button2.removeAttribute('disabled');
    }

    if(ul1Li.length === 0) {
        this.setAttribute('disabled', 'true');
    } else {
        this.removeAttribute('disabled');
        const lastLi = ul1Li[ul1Li.length - 1];
        ul2.appendChild(lastLi);
    }
}, false);

button2.addEventListener('click', function() {
    const ul2 = uls[2];
    const ul2Li = ul2.querySelectorAll('li');
    if(ul1.querySelectorAll('li').length === 0) {
        button1.removeAttribute('disabled');
    }

    if(ul2Li.length === 0) {
        this.setAttribute('disabled', 'true');
    } else {
        this.removeAttribute('disabled');
        const lastLi = ul2Li[ul2Li.length - 1];
        ul1.appendChild(lastLi);
    }
}, false);

//Zadanie 8
const formDiv = document.createElement('div');
document.querySelector('#root').appendChild(formDiv);


const typeElementDiv = document.createElement('div');
typeElementDiv.textContent = 'What element you want to create ?';
formDiv.appendChild(typeElementDiv);

const typeElementInput = document.createElement('input');
typeElementInput.setAttribute('type', 'text');
typeElementDiv.appendChild(typeElementInput);


const contentDiv = document.createElement('div');
contentDiv.textContent = 'What this element should have a text ?';
formDiv.appendChild(contentDiv);

const contentInput = document.createElement('input');
contentInput.setAttribute('type', 'text');
contentDiv.appendChild(contentInput);


const colorDiv = document.createElement('div');
colorDiv.textContent = 'What this element should have a text color ?';
formDiv.appendChild(colorDiv);

const colorInput = document.createElement('input');
colorInput.setAttribute('type', 'text');
colorDiv.appendChild(colorInput);

const multiplyDiv = document.createElement('div');
multiplyDiv.textContent = 'How much times this element should repeat ?';
formDiv.appendChild(multiplyDiv);

const multiplyInput = document.createElement('input');
multiplyInput.setAttribute('type', 'text');
multiplyDiv.appendChild(multiplyInput);

const createButton = document.createElement('button');
createButton.textContent = 'Utwórz';

formDiv.appendChild(createButton);

createButton.addEventListener('click', function() {
    for(let i=0; i<Number(multiplyInput.value); i++) {
        const element = document.createElement(typeElementInput.value);
        element.textContent = contentInput.value;
        element.style.color = colorInput.value;

        formDiv.appendChild(element);
    }
    
}, false);

//Zadanie 9
const tableDiv = document.createElement('div');
document.querySelector('#root').appendChild(tableDiv);

function createFormFields(element, content) {
    const nameDiv = document.createElement(element);
    nameDiv.textContent = content;
    tableDiv.appendChild(nameDiv);
    return nameDiv;
}

function createInputs(elementTo) {
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    elementTo.appendChild(nameInput);
    return nameInput;
}

const nameDiv = createFormFields('div', 'Imię');
const nameInput = createInputs(nameDiv);

const surnameDiv = createFormFields('div', 'Nazwisko');
const surnameInput = createInputs(surnameDiv);

const ageDiv = createFormFields('div', 'Wiek');
const ageInput = createInputs(ageDiv);

const childrenNumberDiv = createFormFields('div', 'Ilość dzieci');
const childrenNumberInput = createInputs(childrenNumberDiv);

const moreButton = createFormFields('button', 'Więcej');

function clearInputs() {
    nameInput.value = '';
    surnameInput.value = '';
    ageInput.value = '';
    childrenNumberInput.value = '';
}

function addTd(input, tr) {
    const nameTd = document.createElement('td');
    nameTd.textContent = input.value;
    tr.appendChild(nameTd);
    return nameTd;
}

function createDeleteButton(tr) {
    const deleteTd = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Usuń';
    deleteTd.appendChild(deleteButton);
    tr.appendChild(deleteTd);
    return deleteButton;
}

validateInputs(nameInput, surnameInput, ageInput, childrenNumberInput);

moreButton.addEventListener('click', function() {
    const table = document.getElementsByTagName('table')[0]; 
    if(table !== undefined) {
        const tr = document.createElement('tr');
        table.appendChild(tr);

        addTd(nameInput, tr);
        addTd(surnameInput, tr);
        addTd(ageInput, tr);
        addTd(childrenNumberInput, tr);

        const deleteButton = createDeleteButton(tr);

        deleteButton.addEventListener('click', function() {
            table.removeChild(tr);
        }, false);

        clearInputs();
    } 
}, false);

const createTableButton = createFormFields('button', 'Utwórz');

function addTh(div, tr) {
    const nameTh = document.createElement('th');
    nameTh.textContent = div.textContent;
    tr.appendChild(nameTh);
    return nameTh;
}

createTableButton.addEventListener('click', function() {
    const table = document.createElement('table');
    table.style.border = '1px solid black';
    tableDiv.appendChild(table);

    const headerTr = document.createElement('tr');
    table.appendChild(headerTr);

    addTh(nameDiv, headerTr);
    addTh(surnameDiv, headerTr);
    addTh(ageDiv, headerTr);
    addTh(childrenNumberDiv, headerTr);

    const deleteTh = document.createElement('th');
    deleteTh.textContent = 'Usuń';
    headerTr.appendChild(deleteTh);

    const firstRowTr = document.createElement('tr');
    table.appendChild(firstRowTr);

    addTd(nameInput, firstRowTr);
    addTd(surnameInput, firstRowTr);
    addTd(ageInput, firstRowTr);
    addTd(childrenNumberInput, firstRowTr);

    const deleteButton = createDeleteButton(firstRowTr);

    deleteButton.addEventListener('click', function() {
        table.removeChild(firstRowTr);
    }, false);

    clearInputs();
}, false);

//Zadanie 10
function validateInputs(nameInput, surnameInput, ageInput, childrenNumberInput) {
    nameInput.addEventListener('change', function() {
        if(/[a-zA-Z]+/g.test(nameInput.value)) {
            nameInput.value = nameInput.value.substring(0, 1).toUpperCase() + nameInput.value.substring(1);
        } else {
            console.log('Its not a name!');
        }
    });

    surnameInput.addEventListener('change', function() {
        if(/[a-zA-Z]+/g.test(surnameInput.value)) {
            surnameInput.value = surnameInput.value.substring(0, 1).toUpperCase() + surnameInput.value.substring(1);
        } else {
            console.log('Its not a surname!');
        }
    });

    ageInput.addEventListener('change', function() {
        if(!/\d{1,3}/g.test(ageInput.value)) {
            console.log('Its not a age!');
        }
    });

    childrenNumberInput.addEventListener('change', function() {
        if(!/\d{1,3}/g.test(childrenNumberInput.value)) {
            console.log('Its not a children number!');
        }
    });
}

//Zadanie 11
function checkIfStringHasNumbers(str) {
    let sum = 0;
    let multiply = 1;
    for(let i=0; i<str.length; i++) {
        if(/\d/.test(str.charAt(i))) {
            sum += Number(str.charAt(i));
            multiply *= Number(str.charAt(i));
        }
    }
    console.log(sum);
    for(let i=0; i<multiply; i++) {
        const div = document.createElement('div');
        div.textContent = str;
        document.querySelector('#root').appendChild(div);
    }
}

checkIfStringHasNumbers('Ma5te7us9z');

//Zadanie 12
function checkAlaExist(string) {
    const object = {
        name: string,
        check: function(name) {
            if(name.includes('Ala')) {
                const index = name.indexOf('Ala');
                let result = name.substring(0, index) + 'Ola' + name.substring(index + 3);
                object.name = result;
                console.log(object.name);
            } else {
                const div = document.createElement('div');
                div.textContent = 'Słowo Ala nie występuje w tekście.';
                document.querySelector('#root').appendChild(div);
            }
        }
    }
    return object;
}

const object2 = checkAlaExist('Mateusz and Ala are students');
object2.check(object2.name);

//Zadanie 13
function processStringArray(inputArray) {
    const result = [];
    inputArray.forEach(element => {
        result.push(Number(element.length));
    });
    return result;
}
const lengthsOfStringArray = processStringArray(['Mateusz', 'Jacek', 'Kuba', 'Kamil']);

function computeSumOfElements(inputArray) {
    let sum = 0;
    inputArray.forEach(element => {
        sum += element;
    });
    return sum;
}

const score = computeSumOfElements(lengthsOfStringArray);

function computeAverageOfElements(inputArray) {
    let average = 0;
    inputArray.forEach(element => {
        average += element;
    });
    return average / inputArray.length;
}

const average = computeAverageOfElements(lengthsOfStringArray);
console.log(average);

//Zadanie 14
const baseObject = {
    name: '',
    surname: '',
    age: ''
}

function assignAndProcessValuesToObject(name, surname, age, object) {
    let flag = false;
    if(name.length > 5) {
        flag = true;
        object.name = name;
    } else {
        object.name = name;
    }
    
    if(surname.length > 5) {
        flag = true;
        object.surname = surname;
    } else {
        object.surname = surname;
    }

    if(age.length > 5) {
        flag = true;
        object.age = age;
    } else {
        object.age = age;
    }

    if(flag) {
        const button = document.createElement('button');
        button.textContent = 'Back to initial state';
        button.addEventListener('click', function() {
            object.name = '',
            object.surname = '',
            object.age = ''

            for(let key in object) {
                if(key.includes('Length')) {
                    delete object[key];
                }
            }
        });
        document.querySelector('#root').appendChild(button);
    }

    for(let key in object) {
        const length = object[key].length;
        const newKey = key + "Length";
        object[newKey] = length;
    }
}

assignAndProcessValuesToObject('Mateusz', 'Drzyzga', '25', baseObject);



