var https = require('https');
/**
 * HOW TO Make an HTTP Call – GET
 */
// options for GET
var optionsget = {
    host : 'query.yahooapis.com', // here only the domain name
    // (no http/https !)
    path :'/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
     // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
   
// do the GET request
var reqGet = https.request(optionsget, function(res) {
    console.log('statusCode: ', res.statusCode);
    // uncomment it for header details
     //console.log('headers: ', res.headers);
  
   res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function(data) {
      responseString += data;
    });

    res.on('end', function() {
      console.log(responseString);    
    });
  
});
  
reqGet.end();
reqGet.on('error', function(e) {
  console.error(e);
});