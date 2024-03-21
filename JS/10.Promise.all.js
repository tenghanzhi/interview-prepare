// Promise.all的特点是接收的是一个可迭代对象，当这个可迭代对象中的所有元素都执行成功会返回一个数组，一个出错则立即返回错误。

function myPromiseAll(iterable) {
  // 首先明确要返回的对象是一个Promise
  return new Promise((resolve, reject) => {
    // 首先将可迭代对象转换为数组
    const promises = Array.from(iterable);
    let flag = 0;
    const result = [];
    // 开始遍历执行
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((res) => {
          result[i] = res;
          flag++;
          if (flag === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}
