//Zadanie1

let time = 0;
const interval = setInterval(() =>
                            {
  time +=1;
  console.log("Cześć po raz " + time);
  
  if(time >= 15)
    {
      clearInterval(interval);
    }
}, 1000)


//Zadanie2

var tabel = [1,2,3,4,5,6,7,8,9]

setTimeout(() =>{
         
  for(i=0; i<tabel.length; i++)
    {
      console.log(tabel[i]);
    }
}, 3000);