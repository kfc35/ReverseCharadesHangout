var app = require('express')();
var server = require('http').createServer(app);

app.use('/static', require('express').static(__dirname + '/static'));
app.get('/', function(req, res) {
    var data = getData();
    res.json(data);
});

/**
 * Generates some sample data.
 */
var getData = function() {
    var data = {};
    data.name = 'Test';
    data.address = '1234 california street';

    return data;
}

var port = process.env.PORT || 3000;
server.listen(port);
