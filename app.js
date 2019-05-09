var express = require('express');
var app = express();

// setup ports
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8888;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

console.log('__dirname: ' + __dirname);
app.use(express.static(__dirname + '/company_show/show1/'));
app.get('/company_show/show1/index.html', function(req, res) {
    res.sendFile(__dirname + '/company_show/show1/index.html');
});

// server listens in an port
app.listen(server_port, server_ip_address, function () {
    console.log('Listening on ' + server_ip_address + ', server_port ' + server_port);
});