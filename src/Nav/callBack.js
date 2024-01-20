//call back is an function which is passed as argument to another function

//async call/task --once completed then only call back function will be called.

function greet(name, callback) {
  console.log(name);
  callback();
}

function callback() {
  console.log("call back");
}

greet("Ja", callback);

function printInfo(msg, callback) {
  setTimeout(function () {
    console.log("message print" + msg);
    callback("call back ");
  }, 2000);
}
function getMessage(msg) {
  console.log(msg);
}
printInfo("J", getMessage);
