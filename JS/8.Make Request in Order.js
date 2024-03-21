// a,b,c三个请求， 希望c在a， 获取后再请求
// Promise.all;

const fs = require("fs");

let arr = [];
const fn = (data) => {
  arr.push(data);
  if (arr.length === 2) {
  }
};

fs.readFile("./a.text", "utf-8", (err, data) => {
  fn(data);
});

fs.readFile("./b.text", "utf-8", (err, data) => {
  fn(data);
});
