//Zadanie 1
class Person {
    constructor(name, surname, age, country, city) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.country = country;
        this.city = city;
    }

    getInfo() {
        console.log("name: " + this.name + ", surname: " + this.surname + ", age: " + this.age + ", country: " + this.country + ", city: " + this.city);
    }

    increaseAge() {
        this.age++;
    }
}

const person1 = new Person('Mateusz', 'Drzyzga', 25, 'Poland', 'Cracow');
const person2 = new Person('Jan', 'Kowalski', 30, 'Poland', 'Warsaw');

person1.increaseAge();
person1.increaseAge();

person2.increaseAge();
person2.increaseAge();
person2.increaseAge();

//Zadanie 2
Person.prototype.favoriteFoods = [];
Person.prototype.showFavoriteFoods = function() {
    for(let i=0; i<this.favoriteFoods.length; i++) {
        console.log(this.favoriteFoods[i]);
    }
}

Person.prototype.addFoods = function(newFood) {
    this.favoriteFoods.push(newFood);
}

person1.favoriteFoods = [];
person1.addFoods('Pizza');
person1.addFoods('Spaghetti');

person2.favoriteFoods = [];
person2.addFoods('Kebap');
person2.addFoods('Apple');
person2.addFoods('Banana');

person1.showFavoriteFoods();
person2.showFavoriteFoods();

//Zadanie 3
class Calculator {
    constructor() {
        this.a = 0;
        this.b = 0;
        this.result = 0;
    }
    save(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
    sub() {
        return this.a - this.b;
    }
    multiply() {
        return this.a * this.b;
    }
    divide() {
        if(this.b === 0) {
            console.log('Przez zero nie podzielisz');
            return;
        }
        return this.a / this.b;
    }
}

//Zadanie 4
const ladder = {
    currentStep: 0,
    maxStepNumber: 10,
    minStepNumber: 0
}

function up(ladder) {
    if(ladder.currentStep === ladder.maxStepNumber) {
        console.log("Nie wejde tam");
        return;
    } 
    ladder.currentStep++;
}

function down(ladder) {
    if(ladder.currentStep === ladder.minStepNumber) {
        console.log("Nioe zejde tam");
        return;
    }
    ladder.currentStep--;
}

function getCurrentHeightInLadder(ladder) {
    console.log("Jestem na miejscu!" + ladder.currentStep + " na drabinie");
}

up(ladder);
up(ladder);
up(ladder);
up(ladder);
up(ladder);
up(ladder);
up(ladder);
up(ladder);
up(ladder);
up(ladder);
up(ladder);
down(ladder);
down(ladder);
down(ladder);
getCurrentHeightInLadder(ladder);