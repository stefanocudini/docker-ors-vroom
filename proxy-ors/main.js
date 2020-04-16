
var http = require('http');

var PORT=9090;

function onRequest(req, res) {

	console.log('\nclient request: ' + req.url);
	console.log('headers: ', req.headers);
	//console.log('user-agent: ', req.headers['user-agent']);

	var options = {
		hostname: 'localhost',
		port: 8080,
		path: req.url,
		method: req.method,
		headers: req.headers
	};

	req.on('data', function(chunk) {
		var b = JSON.parse(chunk);
		console.log('body:', JSON.stringify(b))
	});

	var proxy = http.request(options, function(pres) {

		res.writeHead(pres.statusCode, pres.headers);

		pres.pipe(res, {
			end: true
		});
	});

	req.pipe(proxy, {
		end: true
	});
}

http
.createServer(onRequest)
.listen(PORT);

console.log('proxy listen...',PORT);
