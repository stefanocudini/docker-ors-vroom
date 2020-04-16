/*
	Response header info:
	Access-Control-Allow-Origin:*
	Content-Type:text/json
	X-Powered-By:nodejs
*/

var http 	= require('http');
var fs 		= require('fs');
//var _ 	= require('underscore');
var port 	= "8080" ;

http.createServer(function(req, res) {
 
 console.log(req.url)

    res.writeHead(200, {
        'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Connection': 'close'
    });

	if((new RegExp('matrix')).test(req.url)) {
	    fs.readFile('outmatrix.json', function(err, content) {
	        res.write(content);
	        res.end();
	    });
	}

	else if((new RegExp('matrix')).test(req.url)) {
	    fs.readFile('outmatrix.json', function(err, content) {
	        res.write(content);
	        res.end();
	    });
	}
	
	req.on('data', function(chunk) {
		var b = JSON.parse(chunk);

	    console.log('BODY',b)
	  })

}).listen(port);

console.log("Listening on port " + port );
