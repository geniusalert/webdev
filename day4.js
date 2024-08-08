sync fn : one after another , single threaded , js is sigle threadede , have to wait to end,one by one
one , even if you are single thereaded you can cntext swtich
asncnc fn : multiple one at a time ,
js is single threated and can context switch using async fn
in sycnc fn you dont need callback 
///////////////////////////////////////read file/////////////////////////////////////////

const fs = require('fs');

fs.readFile("a.txt" , "utf-8", function(err,data){
  console.log(data)
})

///////////////////////////////////////promises/////////////////////////////////////////
ugly way


const fs = require('fs');

function readfile(cb){
  fs.readfile("a.txt", "utf-8", function(err,data){
    cb(data);
  }) 
}

function ondone(data){
  console.log(data)
}

readfile(ondone);

better way using promises 

const fs = require("fs");

function readfile() {
  return new promise (function(resolve){
    fs.readFile("a.txt", "utf-8" ,function(err,data){
      resolve(data);
    })
  }}
}

function ondone(data){
  console.log(data);
}

readfile().then(ondone);