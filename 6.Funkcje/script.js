//Zadanie 1
function done() {
    console.log("Udało się!");
}
done(); // Udało się!

//Zadanie 2
function takeParameter(str) {
    console.log(str);
}
takeParameter("Mateusz Drzyzga"); // Mateusz Drzyzga

//Zadanie 3
function returnInputArray(array) {
    return array;
}
let result = returnInputArray([1, 2, 3]);

//Zadanie 4
function takeAndShowWithInterval(str) {
    let count = 0;
    let interval = setInterval(function() {
        console.log(str);
        count++;
        if(count === 5) {
            clearInterval(interval);
        }
    }, 3000);
}
takeAndShowWithInterval("3D Artist");

