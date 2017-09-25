


const express = require('express')
const app = express()
var spawn = require("child_process").spawn;



app.get('/getdata/:city', function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    var cityName = req.params.city.substring(1);

    var process = spawn('python3',["main.py", cityName]);

    process.stdout.on('data', function(data){

      res.send(data.toString())

    });

})

app.listen(5000, function () {
  console.log('app listening on port 5000!')
})