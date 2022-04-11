//#1
const currentDate = new Date('April 11, 2022 ');
const currentDay = currentDate.getDay() 
switch(currentDay)
{
  case 0:
    day = "kvira";
    break;
  case 1:
    day = "orshabati";
    break;
  case 2:
     day = "samshabati";
    break;
  case 3:
    day = "otxshabati";
    break;
  case 4:
    day = "xutshabati";
    break;
  case 5:
    day = "paraskevi";
    break;
  case 6:
    day = "shabati";
}




//#2
for ( let i = 0; 0 < 100; i++ ) {
    console.log (i);
  }

//#3
let i = 0;
while (i <= 50) {
    console.log(i);
    i += 1;
}


//#4
let i=0;
do {
    i++;
	console.log(i);
} while (i < 150);

//#5
let myArr =[]
i=0;
do{
    i++;
    myArr.push(i*i)
}
while (i<1000);
console.log(myArr);