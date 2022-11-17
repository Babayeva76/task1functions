// //7. User gives 3 numbers (x, y, r). Find out if point with location (x,y)
// // is inside a circle with radius r? (the center of the circle is at the origin)

// function getNumberFromUser(message) {
//   let userValue;
//   let flag = false;
//   do {
//     if (flag) {
//       alert("You have to enter number");
//     }
//     userValue = +prompt(message);
//     flag = true;
//   } while (isNaN(userValue));
//   return userValue;
// }
// let x7 = getNumberFromUser(`Enter number x`);
// let y7 = getNumberFromUser(`Enter number y`);
// let r7 = getNumberFromUser(`Enter number r`);

// console.log(`Value of X: ${x7}`);
// console.log(`Value of Y: ${y7}`);
// console.log(`Value of r: ${r7}`);
// let result7;
// doACalculation(x7, y7);

// if (r7 < result7 && r7 >= 0) {
//   console.log("The point is inside the circle");
// } else if (r7 === result7 && r7 >= 0) {
//   console.log("The point touches the circle ");
// } else if (r7 > result7 && r7 >= 0) {
//   console.log("The point is outside the circle");
// } else {
//   alert("The radius can't be negative");
// }

// function doACalculation(x, y) {
//   result7 = Math.sqrt(x7 ** 2 + y7 ** 2, 2);
// }
