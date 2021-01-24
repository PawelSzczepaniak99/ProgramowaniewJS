//Zadanie 1
const car = {
    color: 'black',
    wheels: 12,
    type: 'truck',
    changeName: function(newName) {
        color = newName;
    }
};
for(let key in car) {
    console.log(key + ": " + car[key]);
}

//Zadanie 2
car.changeName('black');

//Zadanie 3
const object = {
    sum: 0,
    makeSum: function(arr1) {
        arr1.forEach(element => {
            object.sum += element;
        });
    }
}
object.makeSum([1, 2, 5]);
console.log(object.sum); // 8

//Zadanie 4
const car2 = {
    name: 'BMW',
    age: 12,
    color: 'black',
    object: {
        name: 'Mateusz',
        status: 'Drzyzga',
        age: 24
    }
}
for(let key in car2) {
    process.stdout.write(key + ": " + car2[key] + " ");
}

//Zadanie 5
for(let key in car2) {
    if(key === 'object') {
        for(let internalKey in car2[key]) {
            process.stdout.write(internalKey + ": " + car2[key][internalKey] + " \n");
        }
    }
} 
//Zadanie 6
car2["type"] = "Truck";

var method = {
    'showString': function() { console.log("Hello") }
};

function addMethods(object, method) {
    for(let key in method) {
        object[key] = method[key];
    }
};
addMethods(car2, method);
car2.showString(); // Hello