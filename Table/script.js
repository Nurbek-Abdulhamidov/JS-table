// let num = 23;

// console.log(Number.isInteger(12));
// console.log(Number.parseFloat(12));
// console.log(Number.parseInt(12));
// console.log(typeof (12).toFixed());
// console.log(typeof num);

// function getNumber(a = 0, b = 1) {
//   return b;
// }
// console.log(getNumber(3) * 3);

// var str = "w3bbra1n is number 1";

// let sum = 0;
// let result = str.split("");
// for (let i = 0; i < result.length; i++) {
//   console.log((sum += parseInt(+result[i])));
// }
// var arr = [0, 1, 2, 5, 4, 2, 1, 1, 3, 4, " "];

// var obj = arr.sort().reduce((title, word) => {
//   title[word] = ++title[word] || 1;
//   return title;
// }, {});
// console.log(obj);

// let obj = {};
// obj[1] = ++obj[1] || 1;
// obj[5] = ++obj[5] || 1;
// obj[2] = ++obj[2] || 1;
// obj[2] = ++obj[2] || 1;
// obj[3] = ++obj[3] || 1;
// obj[4] = ++obj[4] || 1;
// obj[4] = ++obj[4] || 1;
// let res = new Set(arr);
// console.log(res);

// let first = arr[0];
// let newArr = [first];
// for (let i = 1; i < arr.length; i++) {
//   arr.sort();
//   if (first !== arr[i]) {
//     newArr.push(arr[i]);
//     ++first;
//   }
// }

// console.log(newArr);

// var active;
// console.log(!active);
// if (!active) {
//   console.log(active);
//   console.log(active ? "webbrain" : "academy");
// }
// if (active) {
//   console.log(!active ? "IT" : "academy");
// }
// console.log(typeof NaN);

// let firstArr = ["cars", "home", "plants"];
// let secondArr = ["apple", "banana", "ananas"];

// // spread => "yoyib berish"

// let thirdArr = [...firstArr, ...secondArr];
// console.log(thirdArr);

// function sayName() {
//   console.log(name);
//   console.log(age);
//   let name = "Rasul";
//   var age = 21;
// }
// sayName();

// var active;
// console.log(active);

// if (!active) {
//   console.log(!active ? "webbrain" : "academy");
// }
// if (active) {
//   console.log(!active ? "Frontend" : "Programming");
// }

//  result =>  {1 : 1, 2 : 2 , 3 : 2 , 4 : 2}

let array = [1, 2, 2, 3, 5, 4, 3, 4, 5, 6, 6, 7];

// let obj = array.sort().reduce((a, b) => {
//   a[b] = ++a[b] || 1;
//   return a;
// }, {});
// console.log(obj);

//  obj[1] = ++obj[1];
//  obj[1] = ++obj[1];
//  obj[2] = ++obj[2];
//  obj[3] = ++obj[3];

// let result = array.sort().filter((val) => val % 2 == 0);
// let first = array[0];
// let newArr = [first];
// array.sort();
// for (let i = 1; i < array.length; i++) {
//   if (first !== array[i]) {
//     newArr.push(array[i]);
//     ++first;
//   }
// }
// console.log(newArr);

// const occurrences = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (num, curr) {
//   return num[curr] ? ++num[curr] : (num[curr] = 1), num;
// }, {});

// console.log(occurrences);

