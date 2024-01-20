"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var credential = {
    user: "admin",
    password: "password123",
};
var submit = function (arg) {
    console.log(arg.user);
    console.log(arg.pass);
};
submit(credential);
