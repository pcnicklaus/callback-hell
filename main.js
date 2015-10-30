var ourResult = false;

var promise = new Promise(function (resolve, reject) {
  if (ourResult) {
    resolve('it worked');
  } else {
    reject(':(');
  }
})
.then (function (result) {
  console.log('Result:', result);
})
.catch(function (error) {
  console.log('Result:', error);
});
