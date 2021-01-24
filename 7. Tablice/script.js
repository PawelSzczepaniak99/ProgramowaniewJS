//Zadanie 1
const data = ["Mateusz", 1, 45, true, false, null];
for(let i=0; i<data.length; i++) {
    console.log(data[i]);
}

//Zadanie 2
const data2 = [true, false, 1, 56, 112, "Company", "University"];
//1
console.log(data2[0] + ", " + data2[1]); //true, false
//2
console.log(data2[data2.length - 1]); // University
//3
for(let i=0; i<data2.length; i++) {
    console.log(data2[i]); // true false 1 56 112 Company University
}
//4
for(let i=0; i<data2.length; i++) {
    if(i % 2 == 0) {
        console.log(data2[i]); // true 1 112 University
    }
}
//5
for(let i=0; i<data2.length; i++) {
    if(typeof data2[i] === 'string') {
        console.log(data2[i]); // Company University
    }
}
//6
for(let i=0; i<data2.length; i++) {
    if(typeof data2[i] === 'number') {
        console.log(data2[i]); // 1 56 112
    }
}

//Zadanie 3
const numbers = [12, 43, 28, 93, 112];
//1
let sumNumbers = 0;
for(let i=0; i<numbers.length; i++) {
    sumNumbers += numbers[i];
}
console.log(sumNumbers); // 288
//2
let minusNumbers = 0;
for(let i=0; i<numbers.length; i++) {
    minusNumbers -= numbers[i];
}
console.log(minusNumbers); // -288
//3
console.log(sumNumbers / numbers.length); // 57.6
//4
for(let i=0; i<numbers.length; i++) {
    if(numbers[i] % 2 == 0) {
        console.log(numbers[i]); // 12 28 112
    }
}
//5
for(let i=0; i<numbers.length; i++) {
    if(numbers[i] % 2 != 0) {
        console.log(numbers[i]); // 43 93
    }
}
//6
console.log(Math.max.apply(Math, numbers)); // 112
//7
console.log(Math.min.apply(Math, numbers)); // 12
//8
for(let i=numbers.length-1; i>=0; i--) {
    console.log(numbers[i]);
}

//Zadanie 4
const numbersParameter = [12, 31, 67, 81, 74, 137];
function returnArrayElementsSum(array) {
    let result = 0;
    array.forEach(element => {
        result += element;
    });
    return result;
}
console.log(returnArrayElementsSum(numbersParameter)); // 402

//Zadanie 5
function computeAverageMultiplyByEachElement(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    const avg = sum / array.length;
    array.forEach(element => {
        console.log(element * avg);
    });
}
computeAverageMultiplyByEachElement([1, 2, 3]); // 2 4 6

//Zadanie 6
function computeAverageOfEvenNumbers(array) {
    let count = 0;
    let sum = 0;
    array.forEach(element => {
        if(element % 2 == 0) {
            sum += element;
            count++;
        }
    });
    return sum / count;
}
computeAverageOfEvenNumbers([1, 3, 7, 11, 2, 8, 12]);

//Zadanie 7
function sortArray(array) {
    array.sort(function(a, b) {return a - b});
    array.forEach(element => {
        console.log(element);
    });
}
sortArray([7, 23, 1, 3, 89, 11]);

//Zadanie 8
function sumIndexesTwoArrays(arr1, arr2) {
    let iSum = 0;
    for(let i=0; i<arr1.length; i++) {
        iSum += i;
    }
    for(let i=0; i<arr2.length; i++) {
        iSum += i;
    }
    return [iSum];
}
sumIndexesTwoArrays([1, 2, 3], [24, 12]);

//Zadanie 9
const inputArray = [100, 200, 300, 400];
function returnNewArray(arr1, element) {
    const result = [];
    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] === element) {
            continue;
        } else {
            result.push(arr1[i]);
        }
    }
    return result;
}
returnNewArray(inputArray, inputArray[0]);


//Zadanie 10
function returnOppositeArray(arr1) {
    const result = [];
    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] > 0) {
            result.push(-Math.abs(arr1[i]));
        } else if(arr1[i] < 0) {
            result.push(Math.abs(arr1[i]));
        } else {
            result.push(arr1[i]);
        }
    }
    return result;
}
returnOppositeArray([-2, 4, -6, 8, -10]);

