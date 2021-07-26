let express = require('express');
let path = require('path');
let open = require('open');
// let webpack = require('webpack');
// let config  = require('../webpack.config.dev');

// import webpack from 'webpack';
// import config from '../webpack.config.dev';

const port = 3000;
const app = express();
// const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   publicPath: config.output.publicPath
// }));

// Function to serve all static files
// inside public directory.
app.use(express.static('public'));
app.use('/img', express.static('forrest.png'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})

