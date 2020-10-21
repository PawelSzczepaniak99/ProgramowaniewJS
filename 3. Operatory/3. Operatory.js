//Zadanie1

let x = true ;
y = false;

console.log(x === y);


//Zadanie 2 

let num1 = 1;
num2 = 2;
moduloResoult = 0;

moduloResoult = num1 % num2 ;

console.log(moduloResoult);



//Zadanie 3


str1 = "String1";
str2 = "String2";

let stringResoult = "";

stringResoult = str1 + str2;
console.log(stringResoult);


//Zadanie4

var someNumber = 425;
var someString = "425";

console.log(someNumber == someString);// Porównujemy wartości które są takie same, dlatego wartość jest true.
console.log(someNumber === someString);//Porównujemy wartości i typ zmiennej dlatego jest false.


//Zadanie5

counter = 30;

counter++;
console.log(counter);

counter--;
console.log(counter);


//Zadanie6

number1 = 10;
number2 = 15;
resoult = null;

if(number1 > number2)
  {
    console.log(number1)
  }else
    {
      console.log(number2);
    }