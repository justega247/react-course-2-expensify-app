const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: "Chin wu",
    //   age: 76
    // });
    reject('something went wrong');
  }, 7500);
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log('error: ', e);
});

console.log('after');