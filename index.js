var os = require('os')
var http = require('http')

function handleRequest(req, res) {
  res.write('Hey there! I\'m being served from ' + os.hostname())
  res.end()
}
// Test CI
http.createServer(handleRequest).listen(3000)
