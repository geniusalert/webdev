function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

function findIndexOf(thelongstring, thestringweneedtofindout) {
  console.log("thisIsTheLongString", thelongstring);
  console.log("thisIsTheStringWeNeedToFindOut");
  thestringweneedtofindout.indexof(thelongstring);

findIndexOf("Hello World", "World")
}

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

slice
let ans = "hello world ".slice(0,5);
console.log(ans);

const str = "hello world";
console.log(str.replace("world", "javascript"));

const value = "hello world";
const word = value.split("sdfsdf+");

console.log(word);

const value = "    hello   " 

console.log(value.toUpperCase());  

function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
/////////////////////////////////////////////////////////////////////////
const initialArray = [1, 2, 3, 4, 5,6,7, 8, 9, 10]   
initialArray.pop();
console.log(initialArray);
/////////////////////////////////////////////////////////////////////////


function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);


function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);



const initialArray= [1, 2, 3, 4, 5,6,7, 8, 9, 10];
const secondArray = [11, 12, 13, 14, 15,16,17, 18, 19, 20];
console.log(initialArray.concat(secondArray));


////////////////////////////////////////////////////////////////////////

const dog = {
  name : "doggie" ,
  legcount: 2,
  speaks: "bhow bhow",
}

console.log("helo"+ " " + dog["name"]);

class animal {
  constructor(name, legcount, speaks) {
    this.tellsThene =  name ;
    this.tellsthelegcount =  legcount;
    this.tellsthespeaks =   speaks;
  }
  speak() {
    console.log("hi there " + this.tellsThename + " " + this.tellsthespeaks);
  }
}


let dog = new animal("doggie", 2, "bhow bhow");
let catua = new animal("catua", 4, "meow meow"); 

dog.speak();  
  

////////////////////////////////////////////////////////////////////
output

class animal {
  constructor(name, legcount, speaks) {
    this.name = tells the name ;
    this.legcount = tells the legcount;
    this.speaks = = tells the speaks;
  }
}
this.name decides what the name of the animal is will shown and the variable name doggie is name there that will be shown after the result tells the name 

const currentDate = new Date(); 

console.log(currentDate.getTime());

function calculateSum () {
 let a = 0;
  for (let  i = 0 ; i<10000000; i++ ) {
  a = a + i 
  }
  return a ;
}

const beforedate = new Date ();
const beforetimeinms = beforedate.getTime(); 
calculateSum();

const afterdate = new Date ();
const aftertimeinms = afterdate.getTime();

console.log(aftertimeinms - beforetimeinms);

for currentTimeprint() {
  console.log(new Date().getTime());
}

