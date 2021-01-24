//Zadanie 1
function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
    this.changeAge = function(newAge) {
        this.age = newAge;
    }
    this.changeCity = function(newCity) {
        this.city = newCity;
    }
}

let person1 = new Person('Mateusz', 'Drzyzga', 25, 'Poland', 'Cracow', 'Polish');
let person2 = new Person('Krychu', 'Leszczyk', 15, 'China', 'Pekin', 'Chinese');
let person3 = new Person('Siorber', 'Forher', 60, 'Germany', 'Berlin', 'German');
let person4 = new Person('Johny', 'Mielony', 11, 'Russia', 'Moscow', 'English');
let person5 = new Person('Torii', 'Mototada', 420, 'Japan', 'Osaka', 'Japanese');

person1.changeAge(32);
person1.changeCity('York');

person2.changeAge(73);
person2.changeCity('Mielno');

person3.changeAge(35);
person3.changeCity('Skawina');

person4.changeAge(21);
person4.changeCity('Warsaw');

person5.changeAge(22);
person5.changeCity('Mexico');

//Zadanie 2
function Calculator() {
    this.number1 = 0;
    this.number2 = 0;
    this.memory = [];
    this.add = function(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;

        const result = this.number1 + this.number2;
        this.memory.push({operation: 'add', number1: this.number1, number2: this.number2, result: result});
    }
    this.sub = function(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;

        const result = this.number1 - this.number2;
        this.memory.push({operation: 'sub', number1: this.number1, number2: this.number2, result: result});
    }
    this.multiply = function(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;

        const result = this.number1 * this.number2;
        this.memory.push({operation: 'multiply', number1: this.number1, number2: this.number2, result: result});
    }
    this.division = function(num1, num2) {
        if(num2 === 0) {
            console.log("Division not allowed.");
            return;
        }
        this.number1 = num1;
        this.number2 = num2;

        
        const result = this.number1 / this.number2;
        this.memory.push({operation: 'division', number1: this.number1, number2: this.number2, result: result});
    }
    this.clearMemory = function() {
        this.memory = [];
    }
    this.toString = function() {
        this.memory.forEach(element => {
            if(element.operation === 'add') {
                console.log(element.operation + ": " + element.number1 + " + " + element.number2 + " = " + element.result);
            } else if(element.operation === 'sub') {
                console.log(element.operation + ": " + element.number1 + " - " + element.number2 + " = " + element.result);
            } else if(element.operation === 'multiply') {
                console.log(element.operation + ": " + element.number1 + " * " + element.number2 + " = " + element.result);
            } else {
                console.log(element.operation + ": " + element.number1 + " / " + element.number2 + " = " + element.result);
            }
        });
    }
}

let calculator1 = new Calculator();
calculator1.add(7, 11);
calculator1.sub(1, 4);
calculator1.multiply(3, 4);
calculator1.division(5, 5);
calculator1.toString();

let calculator2 = new Calculator();
calculator2.add(3, 1);
calculator2.sub(5, 2);
calculator2.multiply(6, 8);
calculator2.division(10, 1);
calculator2.toString();

var interval = null;

//Zadanie 3
class Game {
    constructor() {
        this.number = 0;
    }
    checkNumber(interval) {
        if(this.number > 5) {
            clearInterval(interval);
        }
    }
    randomNumber() {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        this.number = randomNumber;

        clearInterval(interval);
        interval = setInterval(this.randomNumber.bind(this), 1000);
        this.checkNumber(interval);
    }
}

let game = new Game();
game.randomNumber();
let game2 = new Game();
game2.checkNumber();







