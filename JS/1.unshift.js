arr.myUnshift(3); //[3,1,2,3]

Array.prototype.myUnshift = function () {
  const length = arguments.length;
  for (let i = length - 1; i >= 0; i--) {
    const element = arguments[i];
    this.splice(0, 0, element);
  }
  return this.length;
};

let arr = [1, 2, 3];

console.log(arr.myUnshift(3), arr);
