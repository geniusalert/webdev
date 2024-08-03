function getlength(str) {
    console.log ("original lenght", str);
    console.log ("length", str.lenght);
}
getlength("hello world");

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
  

