
var pug = require('pug'),
  path = __dirname + '/verify.pug',
  str = require('fs').readFileSync(path, 'utf8'),
  fn = pug.compile(str, {filename: path, pretty: true});

console.log(fn());