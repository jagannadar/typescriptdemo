// let i = 0;
// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }
// //while
// let p = 0;
// while (p < 10) {
//   console.log(p);
//   p = p + 2;
// }

// console.log("-----");
// //do
// let h = 1;
// do {
//   console.log(h);
//   h++;
// } while (h <= 10);

//break
// let num = 0;
// while (num <= 100) {
//   console.log(num);
//   if (num % 5 == 0) {
//     console.log("hi");
//     break;
//   }
//   num++;
// }

// const browser = ["edge", "IE"];
// for (const e of browser) {
//   if (e == "edge") {
//     console.log("launch edge");
//     break;
//   }
// }
// objects
const details = {
  name: "Jagan",
  age: "29",
};

for (const key in details) {
  console.log(key + " : " + details[key]);
}
//array
const browserName = ["edge", "IE"];
for (const e in browserName) {
  console.log(browserName[e]);
}
