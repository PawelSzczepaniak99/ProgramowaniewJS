//Zadanie1

num1 = 165;
num2 = 765;

if(num1 > num2)
  {
    console.log(num1);
  }else
    {
      console.log(num2);
    }

//Zadanie2

num1 = 8761;
num2 = 8972;
num3 = 12321;

if(num1 > num2 && num1 > num3)
  {
    console.log(num1);
  }else if(num2 > num1 && num2 > num3)
    {
      console.log(num2);
    }else 
      {
        console.log(num3);
      }

//Zadanie3

for(let i = 0; i < 10; i++)
  {
    console.log("Lubię Jave");
  }

//Zadanie4

resoult = 0;

for(let j = 0; j <= 10; j++)
  {
    resoult += j;
    
  }
console.log(resoult);

//Zadanie5

let n = 5;

for (k = 0; k <= n; k++)
  {
    if(k % 2)
      {
        console.log(k + " parzysta");
      }
    else
        {
          console.log(k + " nieparzysta");
        }
      
  }


//Zadanie6

for(l=0; l<10; l++)
  {
    for(z=0; z<15; z++)
      {
        console.log("l= " + l + "z= " + z);
      }
    
  }

//Zadanie7

for(c=0; c<=100; c++)
  {
    if(c%3)
      {
        console.log("Fizz")
      }
    if(c%5)
      {
        console.log("Buzz")
      }
    if(c%5 && c%3)
      {
        console.log("FizzBuzz")
      }
    else
      {
        console.log(c);
      }
  }

//Zadanie8
//for(i = 0; i<5; i++)
  //{
  //  console.log("*" + repeat(i));
 // }

let star = 5;
let result = '';

for(let i = 0; i<= star; i++)
  {
    for(let j = 0; j < i; j++)
      {
        result += "*";
      }
    
    console.log(result);
    result = "";
  }