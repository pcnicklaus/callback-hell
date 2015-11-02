var request = require('request');
var cheerio = require('cheerio');

// var promise = new Promise(function (resolve, reject) {
//   if (ourResult) {
//     resolve(10);
//   } else {
//     reject(':(');
//   }
// });

// promise.then(successFn, errorFn)
//   .then (function (result) {
//       product = result * 10;
//     console.log('1', product);
//     return product;
//   })

// var Url = "https://www.reddit.com/r/Web_Development/";


// var httpPromise = new Promise(function (resolve, reject) {
//   if (getRequest) {
//     resolve
//   }
// });

//   var getRequest = request(Url, function (error, response, html) {
//     if (!error && response.statusCode == 200) {
//       console.log("yeah")
//     } else {
//       console.log('booooooo');
//     }
//   });

// var hnP = new Promise(function (resolve, reject) {
//   request('http://news.ycombinator.com', function (error, response, body) {
//     if (error) {reject('Blew Up')}
//     if (response && response.statusCode === 200) { resolve ('it worked!') }
//   })
// });


// A Request Example...

var request = require('request');
var hackerNewsPromise = new Promise(function (resolve, reject) {
  request('http://news.ycombinator.com/', function (error, response, body) {
    if ( error ) { reject('Blew up.'); }

    var $ = cheerio.load(success);
    var title = $('td.title a').first().text();

    if ( response && response.statusCode == 200 ) {
      resolve(body);
    } else {
      reject('Something happened...');
    }
  });
});

hackerNewsPromise.then(function (success) {
  console.log('Success:', success);
})
.catch (function (error) {
  console.log('Error:', error);
});
