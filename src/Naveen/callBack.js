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
printInfo("Jagan", getMessage);

//Fetch user data

function fetchuserdata(userid, callback) {
  setTimeout(function () {
    const users = {
      1: { id: 1, name: "Jagan" },
      2: { id: 2, name: "Ramar" },
    };

    const user = users[userid];
    if (user) {
      callback(null, user);
    } else {
      callback("not present", user);
    }
  }, 3000);
}
//call back
function handleuserdata(error, user) {
  if (error) {
    console.error("Error :", error);
  }
  console.log("User :", user);
}
fetchuserdata(2, handleuserdata);
