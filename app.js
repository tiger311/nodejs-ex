var express = require('express'),
    app     = express(),
    morgan  = require('morgan');
    
Object.assign=require('object-assign');

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'));

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
//var mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
//    mongoURLLabel = "";

console.log('meow!');
console.log('__dirname: ' + __dirname);
console.log('ip & port: ' + ip + ':' + port);
app.use(express.static(__dirname + '/company_show/show1/'));
app.get('/company_show/show1/index.html', function(req, res) {
    res.sendFile(__dirname + '/company_show/show1/index.html');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;

// server listens in an port
//app.listen(server_port, server_ip_address, function () {
//    console.log('Listening on ' + server_ip_address + ', server_port ' + server_port);
//});