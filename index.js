var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser'); 

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})