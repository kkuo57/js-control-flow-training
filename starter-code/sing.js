console.log("sing.js loaded");

var bottleNumber = prompt("How many bottles of beer?");

// if (100 >= bottleNumber >= 0) {
//     console.log(bottleNumber + " bottles of beer on the wall");
//     console.log(bottleNumber + " bottles of beer");
//     console.log("Take one down and pass it around,");
//     bottleNumber = bottleNumber - 1;
//     } else if (bottleNumber === 1){
//       console.log(bottleNumber + " bottle of beer on the wall");
//       console.log(bottleNumber + " bottle of beer");
//       console.log("Take one down and pass it around,");
//       bottleNumber = bottleNumber - 1;
//       console.log("No more bottles of beer.");
//   } else if (isNaN(bottleNumber)) {
//     parseInt(prompt("It is not a number. Please enter a number from 1 to 100", ""));
//   } else {
//     parseInt(prompt("Your number (" + number + ") is above 100. Please enter a number from 1 to 100", ""));
// }


while (bottleNumber > 0){
  console.log(bottleNumber + " bottles of beer on the wall");
  console.log(bottleNumber + " bottles of beer");
  console.log("Take one down and pass it around,");
  bottleNumber = bottleNumber - 1;
  if (bottleNumber === 1){
    console.log(bottleNumber + " bottle of beer on the wall");
    console.log(bottleNumber + " bottle of beer");
    console.log("Take one down and pass it around,");
    bottleNumber = bottleNumber - 1;
    console.log("No more bottles of beer.");
  }
}