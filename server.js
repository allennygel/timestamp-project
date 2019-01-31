// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp', function(req, res) {
let unixdate= new Date().getTime();
let naturalDate = new Date().toUTCString();
  res.json({unix: unixdate, utc: naturalDate})
})

app.get('/api/timestamp/:date_string', function(req,res){

const dateVal = req.params.date_string;

if(isNaN(dateVal)){
let date = new Date(dateVal)
date = date.toUTCString();
let unixDate = new Date(dateVal).getTime();
res.json({unix: unixDate, utc: date});
}
if(!isNaN(dateVal)){
let date = new Date(Number(dateVal)*1000)
date = date.toUTCString();
let unixDate = new Date(Number(dateVal)).getTime();
res.json({unix: unixDate, utc: date});

}
});





// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
  console.log("Timestamp");
});
