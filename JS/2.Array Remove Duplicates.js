let arr = [1, 1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9];

Array.prototype.myUnique = function () {
  //   return Array.from(new Set(this)); // cant check [2], [2]
  // ///////////////////////////////////////////
  //   let arr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!arr.includes(arr[i])) {
  //       arr.push(arr[i]);
  //     }
  //   }
  // ///////////////////////////////////////////
  return this.filter((value, index) => {
    return this.indexOf(value, 0) === index;
  });
};
