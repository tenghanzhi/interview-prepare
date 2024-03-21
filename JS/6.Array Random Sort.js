let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const fn = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let randomIndex = parseInt(Math.random() * arr.length);

    let curNum = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = curNum;
  }

  return arr;
};

arr.sort(() => Math.random() - 0.5);
