// print even from array
const ages = [3, 10, 18, 20 , 50 ,45 ];


for (let i = 0; i < ages.length ; i++) {
  if (ages[i] % 2 == 0 ) {
    console.log(ages[i]) ;
  }
}


// largest in array 
const ages = [3, 10, 18, 20 , 50 ,45 ];
var largest = ages[0];

for (i = ages[0]; i < ages.length; i++) {
  if (ages[i] > largest){
    largest = ages[i] ;
  }
}
console.log(largest)


print first name when the gender is male 

const personArray = ["qt" , "gt" , "ft"] ;
const genderArray = ["m" , "f" , "m"] ;

for ( let i=0 ; i < personArray.length ; i++) { 
  if (genderArray[i] === "m") {
    console.log(personArray[i]);
  }
}

const user1 = [{
  firstname: "gt", 
  gender : "m", 
  age: "20"
}, {
  firstname: "qt",
  gender : "f ",
  age: "20"
}, {
  firstname : "ft",
  gender : "m",
  age: 23
}
]

for (let i=0; i<user1.length; i++) {
   if (user1[i]["gender"] == "m") {
     console.log(user1[i]["firstname"]);
   }
}

function greet(someone) {
  console.log("hello");
}

greet("someone"); 

function nameofthefucntion(parameter1, parameter2)

function sum(num1 , num2,) {
  let result = num1 + num2 ;
 displayresult(result);
}

function displayresult(data){ 
console.log("Result of the sum is " + data); 

}

function displayresultpassive(data) {
  console.log("Sum's Result is " + data);
}

const ans = sum(2,3);
console.log(ans)

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet('tony')

function sum(sum1, sum2, fntocall) {
  let result = sum1 + sum2 ;
  fntocall(result)
}

function displayresult(data) {
  console.log("result of the sum is " + data) ;
}

const ans = sum (1,2, displayresult);


function calcuatearthimetic (a, b , type) {
 function arthimaticfinalfucntion(a, b) {
   return a+b 
 }
}




function sum(a,b) {
  return a+b ;
}

function  sub(a,b) {
  return a-b ;
}

console.log(calcuatearthimetic(1,2, "sum")) ; 


function greet() {
  console.log("hello world")
}

setTimeout(greet, 1*1000);

for (let i = 30; i>0 ;i-- ) {
  console.log(i)
}


function timer(time){
  setInterval(timer, 1*1000);
  for (let i = timer ; i>0; i--) {
    console.log(time)
  }
}

function secondtimer(time) {
for (let i = time; i > 0; i++) {
  console.log(i)
}
}

secondtimer(1)

function secondTimer(){
  for (let i = 0; i <= 60; i++) {
    console.log(i)
  }
}

function secondTimerInterval() {
setInterval(secondTimer,1000);
}

for (let i = 0; i <= 60; i++) {

setInterval(secondTimerInterval,1000);
}
