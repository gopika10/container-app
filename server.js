//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/capp'));

app.get('/*', function(req,res) {
  console.log('__dirname:'+__dirname);
  res.sendFile(path.join(__dirname+'/dist/capp/index.html'));
});

// Start the app by listening on the default Heroku
app.listen(process.env.PORT || 8080);
