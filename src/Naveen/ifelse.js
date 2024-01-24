// function age(n) {
//   if (n > 10) {
//     console.log("over");
//   } else {
//     console.log("low");
//   }
// }
// age(9);

// function num(n) {
//   if (n > 10) {
//     console.log("greater");
//   } else if (n > 15) {
//     console.log("greater than 15");
//   } else {
//     console.log("lower");
//   }
// }
// num(9);

// //nested if-else
// function grade(score) {
//   let grade;
//   if (score >= 90) {
//     grade = A;
//   } else {
//     if (score >= 80) {
//       grade = "B";
//     } else {
//       if (score > 70) {
//         grade = "C";
//       } else {
//         grade = "D";
//       }
//     }
//   }
//   console.log(grade);
// }

// grade(70);

//invoke browser

let browser = "chrome";
if (browser == "chrome") {
  console.log("launch chrome");
} else if (browser == "edge") {
  console.log("edge");
} else {
  console.log("pls enter correct");
}

// switch statement

function checkDay(dayNum) {
  let day;
  switch (dayNum) {
    case 0:
      day = "Monday";

      break;
    case 1:
      day = "Tuesday";

      break;

    case 2:
      day = "Wednesday";

    // break;

    case 3:
      day = "Thursday";

      break;

    case 4:
      day = "Friday";

      break;

    default:
      console.log("invalid day");
      break;
  }
  console.log(day);
}

checkDay(2);
