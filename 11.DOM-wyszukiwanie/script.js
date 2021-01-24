//Zadanie 1
const list = window.document.getElementsByClassName('list');

//Zadanie 2
function returnTags(className) {
    const result = document.getElementsByClassName(className);
    console.log(result[0].innerHTML);
    console.log(result[1].innerHTML);
}
returnTags('list');

//Zadanie 3
const idList = document.getElementById('list');

//Zadanie 4
function showTags(selector) {
    const result = document.querySelectorAll(selector);
    result.forEach(element => {
        console.log(element);
    });
}
//1
showTags('li');
//2
showTags('ul');
//3
showTags('span');
//4
showTags('div.list > span');
//5
showTags('div#spans > span');