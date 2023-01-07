const modal = document.querySelector(".modal");

const numbers = [3, 2, 4, 1, 5];
// const reversed = color.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
// reversed[0] = 5;
// console.log(reversed);

const color = ["black", "red", "white", "pink"];
const reversed = color.reverse();

let i = 0;
function change() {
  modal.style.backgroundColor = reversed[i % 4];
  i++;
}
setInterval(change, 1000);

const reversename = ["allen", "house", "life", "pjohn"];
const backway = reversename.reverse();
const colors = ["yellow", "#9966cc", "green", "#bdb76b"];
let a = 0;

function move() {
  modal.innerHTML = backway[a % 4];
  a++;
  modal.style.color = colors[a % 4];
  a++;
}
setInterval(move, 1000);

// var text = ["Welcome", "Hi", "Sup dude"];
// var counter = 0;
// var elem = document.getElementById("changeText");
// var inst = setInterval(change, 1000);

// function change() {
//   elem.innerHTML = text[counter];
//   counter++;
//   if (counter >= text.length) {
//     counter = 0;
//     // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
//   }
// }
const heroes = ["Batman", "Superman"];
const villains = ["Joker", "Bane", "allen"];
// const all = [...heroes, ...villains];

function array() {
  const arrays = heroes.concat(villains);
  console.log(arrays);
}
array();
