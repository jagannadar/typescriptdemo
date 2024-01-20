//functional and global scope
var nam = "Jagan";

function nameList() {
  var nameList = "Jag";
  console.log(nameList);
}

console.log(nam);
nameList();
console.log(nameList); // not possible to call outside fun
// Re-declare is possible
var browser = "chrome";
var browser = "edge";
// Re-initialize is possible
browser = "firefox";
console.log(browser);
//
var n;
console.log(n);

//issues with Var

var flag = "Jagan";
var t1 = 5;
if (t1 > 3) {
  var flag = "Ramar";
}
console.log(flag);

//let
//preferred than var
//scope: block

let m = "Jagan";
let nn = "Ramar";
let t = 5;
if (t > 7) {
  let nn = "jags";
  //console.log(j);
}
console.log(nn);
// Re-declare not possible
let j = "jag";
//let j = "jag";

// you can re- initialize or update the let

let h = "name";
h = "last";
console.log(h);

var test = "name";
//let test = "lname";
//console.log(test);

//const: must be initialized with some value. const = 10
// cannot reinitialize
const ng = "jags";
ng = "update";
console.log(ng);
