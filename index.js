/**
 * Created by BarMaltzman on 15/09/2017.
 */


const express = require('express')
const app = express()
var spawn = require("child_process").spawn;

// router.get(‘/’, function(req, res) {
//  res.json({ message: ‘API Initialized!’});
// });

app.get('/getdata/:city', function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    var cityName = req.params.city;
    console.log('in the server',cityName);

    var process = spawn('python3',["main.py", cityName]);

    process.stdout.on('data', function(data){

      console.log(data.toString());
      res.send(data.toString())


    });

    process.stdout.on('end', function(){
      console.log('Success');
    });



})

app.listen(5000, function () {
  console.log('app listening on port 5000!')
})