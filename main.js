// var ourResult = false;

// var promise = new Promise(function (resolve, reject) {
//   if (ourResult) {
//     resolve('it worked');
//   } else {
//     reject(':(');
//   }
// })
// .then (function (result) {
//   console.log('Result:', result);
// })
// .catch(function (result) {
//   console.log('Result:', result);
// });

// var ourResult = false;

// var promise = new Promise(function (resolve, reject) {
//   if (ourResult) {
//     resolve('it worked');
//   } else {
//     reject(':(');
//   }
// })
// .then (function (result) {
//   console.log('Result:', result);
// }, function (error) {
//   console.log('Error', error);
// });

var ourResult = true;

var promise = new Promise(function (resolve, reject) {
  if (ourResult) {
    resolve(10);
  } else {
    reject(':(');
  }
});

var successFn = function (message) {console.log('Success:', message); return message; };
var errorFn = function (message) {console.log('Errror:', message);};

// promise.then(successFn, errorFn);

// promise.then(successFn, errorFn)
//       .then (successFn, errorFn);

promise.then(successFn, errorFn)
  .then (function (result) {
      product = result * 10;
    console.log('1', product);
    return product;
  })
  .then (function (result){
    p = result * 10;
    console.log('2', p);
    return p;
  })
  .then (function (result) {
    product = result / 10;
    console.log('3', product);
    throw error;
  })
  .then (function (result) {
    product = result * 10;
    console.log('4', product);
    return result;
  })
    .then (function (result) {
    product = result * 10;
    console.log('99', product);
    return result;
  })
    .then (function (result) {
    product = result * 10;
    console.log('6', product);
    return result;
  })
  .catch(function (result) {
    product = result / 10;
    console.log('5');
    return result;
  });
